import { error } from '@sveltejs/kit';

export const load = async ({ data: { slug, lang } }) => {
	try {
		const { default: content, frontmatter: meta } = await import(`@posts/${slug}/${lang}.md`);
		return {
			content,
			meta
		};
	} catch (err) {
		console.log(err);
		return error(404, `post ${slug} not found!`);
	}
};
