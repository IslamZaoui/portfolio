import { formatDistanceToNow } from 'date-fns';
import { enUS, ar } from 'date-fns/locale';
import { base } from '$app/paths';

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
			post.published && posts.push(post);
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

export const replaceLocaleInUrl = (url: URL, locale: string, full = false): string => {
	const [, , ...rest] = getPathnameWithoutBase(url).split('/');
	const new_pathname = `/${[locale, ...rest].join('/')}`;
	if (!full) {
		return `${new_pathname}${url.search}`;
	}
	const newUrl = new URL(url.toString());
	newUrl.pathname = base + new_pathname;
	return newUrl.toString();
};

const REGEX_START_WITH_BASE = new RegExp(`^${base}`);
export const getPathnameWithoutBase = (url: URL) => url.pathname.replace(REGEX_START_WITH_BASE, '');
