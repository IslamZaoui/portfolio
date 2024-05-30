import { js2xml } from 'xml-js';
import type { RequestHandler } from './$types';
import config from '@config';
import { getPosts } from '@/index';

export const prerender = true;

const baseUrl = config.site_url;

function generateUrls(posts: Post[], lang: string) {
	return posts.map(({ slug, date }) => ({
		loc: `${baseUrl}/${lang ? `${lang}/` : ''}blog/${slug}`,
		lastmod: date.split('T')[0]
	}));
}

function generateSitemap(arPosts: Post[], enPosts: Post[]) {
	const basePaths = ['uses', 'contact', 'blog'];
	const languages = ['ar', 'en'];

	const staticUrls = [
		...languages.map((lang) => ({
			loc: `${baseUrl}/${lang}`,
			lastmod: new Date().toISOString().split('T')[0]
		})),
		...basePaths.flatMap((path) =>
			languages.map((lang) => ({
				loc: `${baseUrl}/${lang}/${path}`,
				lastmod: new Date().toISOString().split('T')[0]
			}))
		)
	];

	const urls = [...staticUrls, ...generateUrls(arPosts, 'ar'), ...generateUrls(enPosts, 'en')];

	const sitemap = {
		_declaration: { _attributes: { version: '1.0', encoding: 'utf-8' } },
		urlset: {
			_attributes: {
				xmlns: 'https://www.sitemaps.org/schemas/sitemap/0.9',
				'xmlns:xhtml': 'https://www.w3.org/1999/xhtml',
				'xmlns:mobile': 'https://www.google.com/schemas/sitemap-mobile/1.0',
				'xmlns:news': 'https://www.google.com/schemas/sitemap-news/0.9',
				'xmlns:image': 'https://www.google.com/schemas/sitemap-image/1.1',
				'xmlns:video': 'https://www.google.com/schemas/sitemap-video/1.1'
			},
			url: urls.map(({ loc, lastmod }) => ({ loc, lastmod }))
		}
	};

	return js2xml(sitemap, { compact: true, ignoreComment: true, spaces: 4 });
}

export const GET: RequestHandler = async () => {
	const arPosts = getPosts('ar');
	const enPosts = getPosts('en');
	const sitemapXml = generateSitemap(arPosts, enPosts);

	return new Response(sitemapXml, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
