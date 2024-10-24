import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '@/paraglide/runtime.js';

export const i18n = createI18n(runtime, {
	prefixDefaultLanguage: 'always',
	exclude: ['/sitemap.xml', '/robots.txt', /^\/assets\/.*/, /^\/config\/.*/, /^\/api\/og\/.*/],
	textDirection: {
		ar: 'rtl',
		en: 'ltr'
	}
});
