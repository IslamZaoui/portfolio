<script>
	import { Button } from '@/components/ui/button';
	import { getHighlighter } from 'shiki';
	import { createEventDispatcher } from 'svelte';
	import copy from 'lucide-svelte/icons/copy';
	import check from 'lucide-svelte/icons/check';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	/**
	 * @type {string}
	 */
	export let content;
	export let language;

	let html = '';

	const init = async () => {
		const highlighter = await getHighlighter({
			themes: ['github-dark'],
			langs: ['ts', 'js', 'java', 'svelte', 'python', 'bash']
		});

		html = highlighter.codeToHtml(content, {
			lang: language,
			theme: 'github-dark'
		});
	};

	init();

	let copyState = false;

	function onCopyClick() {
		copyState = true;
		navigator.clipboard.writeText(content);
		setTimeout(() => {
			copyState = false;
		}, 2000);
		dispatch('copy');
	}
</script>

<style lang="postcss">
	:global(.shiki) {
		@apply rounded-xl p-4 pt-14 pb-8;
		overflow-x: auto;
		white-space: pre;
	}
	:global(.shiki pre) {
		white-space: pre-wrap;
	}
</style>

<section class="w-full not-prose relative" dir="ltr">
	<div class="absolute w-full top-3 right-0 px-4 flex items-center justify-between">
		<span class="text-lg font-bold text-white">{language}</span>
		<Button
			size="icon"
			variant="outline"
			title="copy button"
			on:click={onCopyClick}
			class="rounded-xl">
			<svelte:component this={copyState ? check : copy} />
		</Button>
	</div>
	<div class="overflow-x-auto">
		{@html html}
	</div>
</section>
