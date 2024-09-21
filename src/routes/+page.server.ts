import { getPosts } from '@/index.js';
import { languageTag } from '@/paraglide/runtime.js';

async function getExperices(): Promise<Experience[]> {
	return (await import(`@experiences/${languageTag()}.yaml`)).default;
}

async function getProjects(): Promise<Project[]> {
	return (await import(`@projects/${languageTag()}.yaml`)).default;
}

export async function load({ depends }) {
	depends('paraglide:lang');

	return {
		posts: getPosts(languageTag()).slice(0, 5),
		experiences: await getExperices(),
		projects: await getProjects()
	};
}
