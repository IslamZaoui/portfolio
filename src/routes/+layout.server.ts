export const load = async (event) => {
	return {
		url: event.url.pathname,
		lang: event.locals.paraglide.lang
	};
};
