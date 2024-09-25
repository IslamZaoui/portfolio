import { sequence } from '@sveltejs/kit/hooks';
import { i18n } from '@/i18n';
import { SvelteKitSecurityHeaders, RuleSet } from '@faranglao/sveltekit-security-headers';
import config from '@config';

const securityHeaders = SvelteKitSecurityHeaders({
	headers: [
		...RuleSet.SvelteKitSpecific,
		...RuleSet.OwaspRecommendedMinimal,
		{
			name: 'Access-Control-Allow-Origin',
			value: config.SITE_URL
		}
	],
	verbose: false
});

export const handle = sequence(i18n.handle(), securityHeaders.handle);
