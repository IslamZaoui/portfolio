// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			url: string;
			lang: 'en' | 'ar';
		}
		// interface PageState {}
		// interface Platform {}
	}

	type Post = {
		title: string;
		date: string;
		description: string;
		published: boolean;
		slug: string;
	};

	declare module 'lite-youtube-embed'
}

export {};
