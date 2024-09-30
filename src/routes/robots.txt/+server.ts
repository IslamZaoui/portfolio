import { SITE_URL } from '@config';

export const prerender = true;

const text = `
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`.trim();

export const GET = async () => {
	return new Response(text);
};
