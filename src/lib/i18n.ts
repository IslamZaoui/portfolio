import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '@/paraglide/runtime.js';

export const i18n = createI18n(runtime, {
	prefixDefaultLanguage: 'always',
	exclude: ['/sitemap.xml', /^\/OG\/.*/, '/robots.txt', /^\/assets\/.*/, /^\/config\/.*/]
});
