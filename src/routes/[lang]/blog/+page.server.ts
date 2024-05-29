import { error } from '@sveltejs/kit';

export async function entries() {
	return [{ lang: 'en' }, { lang: 'ar' }];
}

export const load = async (event) => {
	try {
		return {
			posts: (await event
				.fetch(`/${event.params.lang}/blog.json`)
				.then((res) => res.json())) as Post[]
		};
	} catch (err) {
		console.log(err);
		return error(500, 'Faild to load posts');
	}
};
