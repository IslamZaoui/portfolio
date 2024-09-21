import { loadFlash } from 'sveltekit-flash-message/server';

export const load = loadFlash(async (event) => {
	return {
		url: event.url.pathname
	};
});
