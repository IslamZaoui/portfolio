<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { replaceLocaleInUrl } from '@/index';
	import { setLocale, locale } from '@i18n/i18n-svelte';
	import type { Locales } from '@i18n/i18n-types';
	import { loadLocaleAsync } from '@i18n/i18n-util.async';
	import Button from '../ui/button/button.svelte';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;

		await loadLocaleAsync(newLocale);

		setLocale(newLocale);

		if (updateHistoryState) {
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}

		invalidateAll();
	};

	$: browser && document.querySelector('html')!.setAttribute('lang', $locale);

	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);

	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl($page.url, lang)
		);
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<Button
	size="icon"
	variant="ghost"
	aria-label={$page.data.lang === 'en' ? 'Change to Arabic' : 'Change to English'}
	href={replaceLocaleInUrl($page.url, $page.data.lang === 'en' ? 'ar' : 'en')}
	rel="alternate"
	hreflang={$page.data.lang === 'en' ? 'ar' : 'en'}>{$page.data.lang === 'en' ? 'AR' : 'EN'}</Button
>
