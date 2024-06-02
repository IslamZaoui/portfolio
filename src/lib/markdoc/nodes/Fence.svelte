<script>
	import { Button } from '@/components/ui/button';
	import { getHighlighter } from 'shiki';
	import copy from 'lucide-svelte/icons/copy';
	import check from 'lucide-svelte/icons/check';
	import Loading from 'lucide-svelte/icons/loader-circle';
	import * as m from '@i18n';
	import { fade } from 'svelte/transition';

	/**
	 * @type {string}
	 */
	export let content;

	/**
	 * @type {string}
	 */
	export let language;

	const highlighter = getHighlighter({
		themes: ['github-dark'],
		langs: [language]
	});

	const transform = async () => {
		return (await highlighter).codeToHtml(content, {
			lang: language,
			theme: 'github-dark'
		});
	};

	let copyState = false;

	function onCopyClick() {
		copyState = true;
		navigator.clipboard.writeText(content);
		setTimeout(() => {
			copyState = false;
		}, 2000);
	}
</script>

<section class="not-prose relative w-full" dir="ltr">
	{#await transform()}
		<div
			class="flex h-[150px] w-full items-center justify-center gap-2 rounded-xl bg-muted text-muted-foreground"
		>
			<Loading class="animate-spin" />
			<span>{m.LOADING()}</span>
		</div>
	{:then html}
		<div class="absolute right-0 top-3 flex w-full items-center justify-between px-4">
			<span class="text-lg font-bold text-white">{language}</span>
			<Button
				size="icon"
				variant="outline"
				title="copy button"
				on:click={onCopyClick}
				class="rounded-xl"
			>
				{#key copyState}
					<span in:fade={{ duration: 200 }}>
						<svelte:component this={copyState ? check : copy} />
					</span>
				{/key}
			</Button>
		</div>
		<div class="overflow-x-auto">
			{@html html}
		</div>
	{/await}
</section>

<style lang="postcss">
	:global(.shiki) {
		@apply rounded-xl p-4 pb-8 pt-14;
		overflow-x: auto;
		white-space: pre;
	}
	:global(.shiki pre) {
		white-space: pre-wrap;
	}
</style>
