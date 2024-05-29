export const load = async ({ data: { slug, lang } }) => {
	const { default: content, frontmatter: meta } = await import(`@posts/${slug}/${lang}.md`);
	return {
		content,
		meta
	};
};
