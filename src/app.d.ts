declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			flash?: {
				type: 'success' | 'error' | 'info' | 'warning' | 'message';
				message: string;
				description?: string;
			};
			url: string;
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

	type Experience = {
		title: string;
		at: string;
		time?: Date;
	};

	type Project = {
		name: string;
		description: string;
		url: string;
		icon: string;
	};

	type Tool = {
		name: string;
		description: string;
		url?: string;
	};

	type Uses = {
		[key: string]: Tool[];
	};
}

export {};
