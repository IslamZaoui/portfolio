import { getPosts } from '@/index';

export const load = async ({ params }) => {
	return {
		slug: params.slug,
		lang: params.lang
	};
};

export const entries = () => {
	const ar_posts = getPosts('ar');
	const en_posts = getPosts('en');
	const all = [
		...ar_posts.map((post) => ({ ...post, lang: 'ar' })),
		...en_posts.map((post) => ({ ...post, lang: 'en' }))
	];
	return all.map((post) => {
		return {
			slug: post.slug,
			lang: post.lang
		};
	});
};
