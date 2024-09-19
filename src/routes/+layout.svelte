<script lang="ts">
	import '../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	import config from '@config';
	import { getSerwist } from 'virtual:serwist';
	import Header from '@/components/layout/header.svelte';
	import Footer from '@/components/layout/footer.svelte';
	import Loading from '@/components/layout/loading.svelte';
	import GoToTop from '@/components/custom/go-to-top.svelte';
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { Toaster, toast } from 'svelte-sonner';
	import { getFlash } from 'sveltekit-flash-message';

	let loading = true;

	onMount(() => {
		loading = false;
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

	const flash = getFlash(page);
	$: if ($flash) {
		switch ($flash.type) {
			case 'success':
				toast.success($flash.message, { description: $flash.description });
				break;
			case 'error':
				toast.error($flash.message, { description: $flash.description });
				break;
			case 'warning':
				toast.warning($flash.message, { description: $flash.description });
				break;
			case 'info':
				toast.info($flash.message, { description: $flash.description });
				break;
			default:
				toast($flash.message, { description: $flash.description });
				break;
		}
		$flash = undefined;
	}
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

<Toaster richColors />
<ModeWatcher />

<ParaglideJS {i18n}>
	<div id="main" class="flex min-h-screen select-none flex-col px-4 antialiased">
		<div class="mx-auto flex w-full flex-grow items-start justify-center">
			<div class="w-full max-w-3xl space-y-4">
				<Header />
				{#key data.url}
					<main
						in:fly={{ duration: 200, y: 20 }}
						class="flex flex-grow flex-col items-center justify-start gap-8"
					>
						<slot />
					</main>
				{/key}
			</div>
		</div>
		<Footer />
	</div>

	<GoToTop />
	<Loading bind:loading />
</ParaglideJS>
