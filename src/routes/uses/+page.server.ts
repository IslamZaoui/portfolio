import { languageTag } from '@/paraglide/runtime';

async function getUses() {
	return (await import(`@uses/${languageTag()}.yaml`)).default as Uses;
}

export const load = async ({ depends }) => {
	depends('paraglide:lang');

	return {
		uses: await getUses()
	};
};
