<script lang="ts">
	import '../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '@/i18n';
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	import * as Layout from '@/components/layout';
	import { Toaster, toast } from 'svelte-sonner';
	import { getFlash } from 'sveltekit-flash-message';
	import GoToTop from '@/components/custom/go-to-top.svelte';

	let { data, children } = $props();

	const flash = getFlash(page);
	$effect(() => {
		if ($flash) {
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
	});
</script>

<Toaster richColors />
<ModeWatcher />

<ParaglideJS {i18n}>
	<Layout.Root url={data.url}>
		{#snippet header()}
			<Layout.Header />
		{/snippet}
		{@render children()}
		{#snippet footer()}
			<Layout.Footer />
		{/snippet}
	</Layout.Root>
	<GoToTop />
</ParaglideJS>
