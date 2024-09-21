import { getPostsSlug } from '@/index';

export const load = async ({ params, depends }) => {
	depends('paraglide:lang');

	return {
		slug: params.slug
	};
};

export const entries = () => {
	return getPostsSlug().map((slug) => {
		return {
			slug
		};
	});
};
