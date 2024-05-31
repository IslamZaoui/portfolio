import { loadLocaleAsync } from '@i18n/i18n-util.async';
import { i18nObject } from 'typesafe-i18n';

export const config = {
	runtime: 'edge'
};

export const ssr = true;
export const prerender = true;
export const csr = true;

export const load = async ({ data }) => {
	await loadLocaleAsync(data.lang);
	i18nObject(data.lang, 'en');
	return {
		...data
	};
};
