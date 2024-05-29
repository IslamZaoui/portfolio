import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

function extractLanguageFromUrl(url: string): string | undefined {
	const pattern = /^\/([a-z]{2})\//;
	const match = url.match(pattern);

	return match ? match[1] : undefined;
}

export const load = (async (event) => {
	if (event.url.pathname === '/') redirect(300, '/en');
	return {
		url: event.url.pathname,
		lang: extractLanguageFromUrl(event.url.pathname) ?? 'en'
	};
}) satisfies LayoutServerLoad;
