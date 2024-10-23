import { error } from '@sveltejs/kit';
import { languageTag } from '@/paraglide/runtime.js';
import type { Snippet } from 'svelte';

export const load = async ({ data: { slug } }) => {
	const fallbackLang = languageTag() === 'ar' ? 'en' : 'ar';

	const loadContent = async (language: string) => {
		try {
			const { default: content, frontmatter: meta } = await import(`@posts/${slug}/${language}.md`);
			return { content, meta } as { content: Snippet; meta: Omit<Post, 'slug'> };
		} catch {
			return null;
		}
	};

	const contentData = (await loadContent(languageTag())) || (await loadContent(fallbackLang));
	if (contentData) {
		return contentData;
	}

	return error(404, 'Post not found');
};
