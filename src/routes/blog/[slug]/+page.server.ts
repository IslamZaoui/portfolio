import { getPostsSlug } from '@/index';

export const load = async ({ params, locals }) => {
	return {
		slug: params.slug,
		lang: locals.paraglide.lang
	};
};

export const entries = () => {
	return getPostsSlug().map((slug) => {
		return {
			slug
		};
	});
};
