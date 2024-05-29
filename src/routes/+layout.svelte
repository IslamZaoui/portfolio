<script lang="ts">
	import '../app.pcss';
	import { afterNavigate, beforeNavigate, invalidateAll } from '$app/navigation';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/Flip';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/stores';
	import { loadAllLocales } from '@i18n/i18n-util.sync';
	import { setLocale, locale } from '@i18n/i18n-svelte';
	import { i18n } from 'typesafe-i18n';

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
</script>

<ModeWatcher />
<slot />
