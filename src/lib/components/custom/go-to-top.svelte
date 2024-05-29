<script lang="ts">
	//copied from https://svelte.dev/repl/1c49e964ab144dcf82bb607a9aff74b5?version=3.58.0 then edited
	import { onMount } from 'svelte';
	import Button from '../ui/button/button.svelte';
	import ArrowUpIcon from 'lucide-svelte/icons/arrow-up';
	import { fade } from 'svelte/transition';

	export let showAtPixel = 100;
	let scrollHeight = 0;
	let showGotoTop = false;

	const gotoTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	onMount(() => {
		const handleScroll = () => {
			scrollHeight = window.scrollY;
			showGotoTop = scrollHeight > showAtPixel;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if showGotoTop}
	<div in:fade out:fade>
		<Button
			size="icon"
			on:click={gotoTop}
			title="Go to top"
			class="fixed md:bottom-6 bottom-4 right-4 z-50 rounded-xl transition-transform duration-300
			hover:translate-y-[-10px]">
			<ArrowUpIcon />
		</Button>
	</div>
{/if}
