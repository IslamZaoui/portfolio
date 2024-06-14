<script lang="ts">
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';
	// @ts-ignore
	import img1 from '@assets/loading/1.webp?enhance';
	// @ts-ignore
	import img2 from '@assets/loading/2.webp?enhance';
	// @ts-ignore
	import img3 from '@assets/loading/3.webp?enhance';

	export let loading: boolean;

	const wheel = (node: any, options: any) => {
		let { scrollable } = options;

		const handler = (e: any) => {
			if (!scrollable) e.preventDefault();
		};

		node.addEventListener('wheel', handler, { passive: false });

		return {
			update(options: any) {
				scrollable = options.scrollable;
			},
			destroy() {
				node.removeEventListener('wheel', handler, { passive: false });
			}
		};
	};

	$: if (browser && !loading) {
		document.body.className = '';
	}
</script>

<svelte:window
	use:wheel={{
		scrollable: !loading
	}}
/>

{#if loading}
	<div
		out:fade={{ duration: 200 }}
		class="fixed inset-0 z-50 flex w-screen select-none items-center justify-center bg-gray-500 bg-opacity-50 text-[100px] font-bold"
	>
		{#each [img1, img2, img3] as item, index}
			<img
				class="loading-span w-[80px]"
				style="animation-delay: {index * 0.3}s"
				src={item}
				alt="loading-{index}"
			/>
		{/each}
	</div>
{/if}

<style>
	.loading-span {
		animation: scaleAnimation 0.5s ease infinite;
	}

	@keyframes scaleAnimation {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
	}
</style>
