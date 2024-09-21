import type { RequestHandler } from '@sveltejs/kit';
import config from '@config';
import { getPosts } from '@/index';

export const prerender = true;

type SitemapParams = {
	origin: string;
	staticvalues: string[];
	dynamicvalues: {
		[key: string]: { slug: string[]; lang: string }[];
	};
	changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
	priority: number;
	lang: string[];
};

function sitemap(params: SitemapParams): string {
	const { origin, staticvalues, dynamicvalues, changefreq, priority, lang } = params;

	const createUrlElement = (loc: string): string => {
		const lastmod = new Date().toISOString();
		return `
		<url>
		  <loc>${loc}</loc>
		  <changefreq>${changefreq}</changefreq>
		  <priority>${priority.toFixed(1)}</priority>
		  <lastmod>${lastmod}</lastmod>
		</url>
	  `;
	};

	let urlset = '<?xml version="1.0" encoding="UTF-8"?>\n';
	urlset +=
		'<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0" xmlns:news="https://www.google.com/schemas/sitemap-news/0.9" xmlns:image="https://www.google.com/schemas/sitemap-image/1.1" xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">\n';

	staticvalues.forEach((path) => {
		lang.forEach((lang) => {
			const alternateLoc = `${origin}/${lang}${path}`;
			urlset += createUrlElement(alternateLoc);
		});
	});

	for (const path in dynamicvalues) {
		dynamicvalues[path].forEach(({ slug, lang: itemLang }) => {
			slug.forEach((slugValue) => {
				const dynamicPath = path.replace('[slug]', slugValue);
				urlset += createUrlElement(`${origin}/${itemLang}${dynamicPath}`);
			});
		});
	}

	urlset += '</urlset>';

	return urlset;
}

export const GET: RequestHandler = async () => {
	const postsEn = getPosts('en');
	const postsAr = getPosts('ar');

	return new Response(
		sitemap({
			origin: config.SITE_URL,
			staticvalues: ['', '/blog', '/uses', '/contact'],
			dynamicvalues: {
				'/blog/[slug]': [
					{
						slug: postsEn.map((post) => post.slug),
						lang: 'en'
					},
					{
						slug: postsAr.map((post) => post.slug),
						lang: 'ar'
					}
				]
			},
			changefreq: 'daily',
			priority: 0.7,
			lang: ['en', 'ar']
		}),
		{
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'max-age=0, s-maxage=3600'
			}
		}
	);
};
