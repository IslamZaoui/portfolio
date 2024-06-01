import type { AvailableLanguageTag } from '../../lib/paraglide/runtime';
import type { ParaglideLocals } from '@inlang/paraglide-sveltekit';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			paraglide: ParaglideLocals<AvailableLanguageTag>;
		}
		interface PageData {
			url: string;
			lang: AvailableLanguageTag;
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

	declare module 'lite-youtube-embed';
}

export {};
