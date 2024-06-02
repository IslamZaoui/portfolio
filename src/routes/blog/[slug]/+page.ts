import { error } from '@sveltejs/kit';

export const load = async ({ data: { slug, lang } }) => {
	const fallbackLang = lang === 'ar' ? 'en' : 'ar';

	try {
		const { default: content, frontmatter: meta } = await import(`@posts/${slug}/${lang}.md`);
		return {
			content,
			meta
		};
	} catch (err) {
		console.warn(`Error loading post in language ${lang}:`, err);

		if (lang !== fallbackLang) {
			try {
				const { default: fallbackContent, frontmatter: fallbackMeta } = await import(
					`@posts/${slug}/${fallbackLang}.md`
				);
				return {
					content: fallbackContent,
					meta: fallbackMeta
				};
			} catch (fallbackErr) {
				console.error(`Error loading post in fallback language ${fallbackLang}:`, fallbackErr);
			}
		}

		return error(404, 'Post not found');
	}
};
