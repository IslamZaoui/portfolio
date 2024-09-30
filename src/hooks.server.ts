import { sequence } from '@sveltejs/kit/hooks';
import { i18n } from '@/i18n';
import { securityHeaders, rules } from '@islamzaoui/securekit';
import { SITE_URL } from '@config';
import { dev } from '$app/environment';

export const handle = sequence(
	i18n.handle(),
	securityHeaders({
		headers: {
			...rules.defaultHeaders,
			'X-XSS-Protection': '1; mode=block',
			'Access-Control-Allow-Origin': SITE_URL,
			'Cross-Origin-Embedder-Policy': 'require-corp',
			'Cross-Origin-Opener-Policy': 'same-origin',
			'Cross-Origin-Resource-Policy': 'cross-origin'
		},
		csp: {
			directives: {
				'default-src': [SITE_URL]
			}
		},
		debug: dev
	}).handle
);
