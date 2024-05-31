<script lang="ts">
	import Header from '@/components/layout/header.svelte';
	import Footer from '@/components/layout/footer.svelte';
	import GoToTop from '@/components/custom/go-to-top.svelte';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<div class="flex min-h-screen flex-col px-4" dir={data.lang === 'en' ? 'ltr' : 'rtl'}>
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
