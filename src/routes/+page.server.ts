import { i18n } from '@/i18n.js';

export async function load({ fetch, locals }) {
	return {
		posts: fetch(i18n.resolveRoute('/blog.json', locals.paraglide.lang)).then((res) =>
			res.json().then((data) => data.slice(0, 2))
		)
	};
}
