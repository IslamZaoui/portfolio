<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { replaceLocaleInUrl } from '@/index';
	import { setLocale, locale } from '@i18n/i18n-svelte';
	import type { Locales } from '@i18n/i18n-types';
	import { loadLocaleAsync } from '@i18n/i18n-util.async';
	import Button from '../ui/button/button.svelte';

	const switchLocale = async (newLocale: Locales) => {
		if (!newLocale || $locale === newLocale) return;

		await loadLocaleAsync(newLocale);

		setLocale(newLocale);
	};

	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang);
	}
</script>

<Button
	size="icon"
	variant="ghost"
	title={$page.data.lang === 'en' ? 'Change to Arabic' : 'Change to English'}
	href={replaceLocaleInUrl($page.url, $page.data.lang === 'en' ? 'ar' : 'en')}
	rel="alternate"
	hreflang={$page.data.lang === 'en' ? 'ar' : 'en'}>{$page.data.lang === 'en' ? 'AR' : 'EN'}</Button
>
