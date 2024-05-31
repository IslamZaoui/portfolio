export async function load({ fetch, parent }) {
	const { lang } = await parent();
	let posts: Post[] = [];
	try {
		posts = await fetch(`/${lang}/blog.json`).then((res) =>
			res.json().then((res) => res.slice(0, 2))
		);
	} catch (err) {
		console.log(err);
	}
	return { posts };
}

export async function entries() {
	return [{ lang: 'en' }, { lang: 'ar' }];
}
