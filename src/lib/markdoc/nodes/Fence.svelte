<script>
	import { Button } from '@/components/ui/button';
	import copy from 'lucide-svelte/icons/copy';
	import check from 'lucide-svelte/icons/check';
	import { fade } from 'svelte/transition';

	/**
	 * @type {string}
	 */
	export let content;

	/**
	 * @type {string}
	 */
	export let language;

	let copyState = false;

	function onCopyClick() {
		copyState = true;
		navigator.clipboard.writeText(content);
		setTimeout(() => {
			copyState = false;
		}, 2000);
	}
</script>

<div class="not-prose relative w-full" dir="ltr">
	<div class="absolute right-0 top-3 flex w-full items-center justify-between px-4">
		<span class="text-lg font-bold text-white">{language}</span>
		<Button
			size="icon"
			variant="ghost"
			title="copy button"
			on:click={onCopyClick}
			class="rounded-xl text-white hover:bg-transparent hover:text-gray-300"
		>
			{#key copyState}
				<span in:fade={{ duration: 200 }}>
					<svelte:component this={copyState ? check : copy} />
				</span>
			{/key}
		</Button>
	</div>
	<slot />
</div>

<style lang="postcss">
	:global(.shiki) {
		@apply rounded-xl p-4 pb-8 pt-16;
	}

	:global(.shiki code) {
		@apply text-wrap break-words;
	}
</style>
