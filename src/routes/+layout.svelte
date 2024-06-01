<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import '../app.pcss';
	import { afterNavigate, beforeNavigate, invalidateAll } from '$app/navigation';
	// @ts-ignore
	import { gsap } from 'gsap/dist/gsap';
	// @ts-ignore
	import { Flip } from 'gsap/dist/Flip';
	import { ModeWatcher } from 'mode-watcher';
	import config from '@config';
	import { getSerwist } from 'virtual:serwist';
	import Header from '@/components/layout/header.svelte';
	import Footer from '@/components/layout/footer.svelte';
	import GoToTop from '@/components/custom/go-to-top.svelte';
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';

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

	export let data;
	$: lang = $page.data.lang as 'ar' | 'en';
</script>

<svelte:head>
	{@html `
		<script type="application/ld+json">
			{
				"@context": "https://schema.org",
				"@type": "Organization",
				"url": "${config.site_url}",
				"name": "Islam Zaoui",
				"description": "${config.site_description[lang]}",
				"image": "${config.site_url}/OG/Islam Zaoui Portfolio",
				"logo": "${config.site_url}/favicon.svg",
				"email": "${config.email}"
			}
		</script>
		`}
</svelte:head>

<ModeWatcher />

<ParaglideJS {i18n}>
	<div class="flex min-h-screen select-none flex-col px-4">
		<div class="mx-auto flex w-full flex-grow items-start justify-center">
			<div class="w-full max-w-3xl space-y-4">
				<Header />
				{#key data.url}
					<main
						in:fly={{ duration: 200, y: 20 }}
						class="flex flex-grow flex-col items-center justify-start gap-8 antialiased"
					>
						<slot />
					</main>
				{/key}
			</div>
		</div>
		<Footer />
	</div>

	<GoToTop />
</ParaglideJS>
