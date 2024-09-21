import { getPosts } from '@/index';
import { languageTag } from '@/paraglide/runtime.js'

export const load = async (event) => {
	event.depends('paraglide:lang');

	let posts: Post[] = [];
	try {
		posts = getPosts(languageTag());
	} catch (err) {
		console.log(err);
	}
	return { posts };
};
