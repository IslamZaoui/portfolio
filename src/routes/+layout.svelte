<script lang="ts">
	import '../app.pcss';
	import { afterNavigate, beforeNavigate, invalidateAll } from '$app/navigation';
	// @ts-ignore
	import { gsap } from 'gsap/dist/gsap';
	// @ts-ignore
	import { Flip } from 'gsap/dist/Flip';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/stores';
	import { loadAllLocales } from '@i18n/i18n-util.sync';
	import { setLocale, locale } from '@i18n/i18n-svelte';
	import { i18n } from 'typesafe-i18n';
	import { getSerwist } from 'virtual:serwist';
	import { browser } from '$app/environment';

	loadAllLocales();
	//@ts-ignore
	i18n($locale, 'en');
	setLocale($page.data.lang);

	gsap.registerPlugin(Flip);
	let state: Flip.FlipState;
	let targets = ['.header-button'].join(', ');

	beforeNavigate(async () => {
		state = Flip.getState(targets);
	});

	afterNavigate(async () => {
		invalidateAll();
		try {
			await Flip.from(state, {
				targets,
				duration: 0.3,
				scale: true,
				ease: 'power1.easeOut',
				yoyo: true
			});
		} catch {}
	});

	$: if (browser) {
		const loadSerwist = async () => {
			if ('serviceWorker' in navigator) {
				const serwist = await getSerwist();

				serwist?.addEventListener('installed', () => {
					console.log('Serwist installed!');
				});

				void serwist?.register();
			}
		};
		loadSerwist();
	}
</script>

<ModeWatcher />
<slot />
