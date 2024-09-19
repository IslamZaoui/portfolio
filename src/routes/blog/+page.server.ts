import { getPosts } from '@/index';

export const load = async (event) => {
	event.depends('paraglide:lang');

	let posts: Post[] = [];
	try {
		posts = getPosts(event.locals.paraglide.lang);
	} catch (err) {
		console.log(err);
	}
	return { posts };
};
