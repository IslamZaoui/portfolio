import { dev } from '$app/environment';
import { formatDistanceToNow } from 'date-fns';
import { enUS, ar } from 'date-fns/locale';

function getSlugFromPath(filePath: string): string | null {
	const parts = filePath.split('/');
	const index = parts.indexOf('posts');

	if (index !== -1 && parts[index + 1]) {
		return parts[index + 1];
	}

	return null;
}

export function getPosts(lang: 'en' | 'ar' = 'en'): Post[] {
	let posts: Post[] = [];

	let paths;
	if (lang === 'ar') paths = import.meta.glob(`@posts/**/ar.md`, { eager: true });
	else paths = import.meta.glob(`@posts/**/en.md`, { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = getSlugFromPath(path);

		if (file && typeof file === 'object' && 'frontmatter' in file && slug) {
			const frontmatter = file.frontmatter as Post;
			const post = { ...frontmatter, slug } satisfies Post;
			if (post.published || dev) posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export function timeAgo(dateString: string, lang = 'en'): string {
	const date = new Date(dateString);
	const locale = lang === 'ar' ? ar : enUS;
	return formatDistanceToNow(date, { locale, addSuffix: true });
}

export const getPostsSlug = () => {
	const ar_posts = getPosts('ar');
	const en_posts = getPosts('en');
	const all = [...ar_posts, ...en_posts];
	return all.map((post) => {
		return post.slug;
	});
};
