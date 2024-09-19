import { error } from '@sveltejs/kit';

export const load = async ({ data: { slug, lang } }) => {
	const fallbackLang = lang === 'ar' ? 'en' : 'ar';

	const loadContent = async (language: string) => {
		try {
			const { default: content, frontmatter: meta } = await import(`@posts/${slug}/${language}.md`);
			return { content, meta };
		} catch {
			return null;
		}
	};

	const contentData = (await loadContent(lang)) || (await loadContent(fallbackLang));
	if (contentData) {
		return contentData;
	}

	return error(404, 'Post not found');
};
