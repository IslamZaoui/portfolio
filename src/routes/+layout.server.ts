import { redirect } from '@sveltejs/kit';

function extractLanguageFromUrl(url: string): string | undefined {
	const pattern = /^\/([a-z]{2})(?:\/|$)/;
	const match = url.match(pattern);
	return match ? match[1] : undefined;
}

export const load = async (event) => {
	if (event.url.pathname === '/') redirect(301, '/en');
	const lang = extractLanguageFromUrl(event.url.pathname);
	if (lang !== 'ar' && lang !== 'en' && lang !== 'OG' && lang !== 'sitemap.xml')
		redirect(301, '/en');
	return {
		url: event.url.pathname,
		lang
	};
};
