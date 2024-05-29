<script lang="ts">
	import Header from '@/components/layout/header.svelte';
	import Footer from '@/components/layout/footer.svelte';
	import GoToTop from '@/components/custom/go-to-top.svelte';
	import { fly } from 'svelte/transition';

	export let data
</script>

<div class="flex flex-col min-h-screen px-4">
	<div class="flex justify-center items-start mx-auto w-full flex-grow">
	  <div class="max-w-3xl w-full space-y-4">
		<Header />
		{#key data.url}
		  <main in:fly={{ y: 20, duration: 200, delay: 200 }} out:fly={{ duration: 200 }}
			class="flex flex-col justify-start items-center gap-8 flex-grow">
			<slot />
		  </main>
		{/key}
	  </div>
	</div>
	<Footer />
</div>

<GoToTop />
