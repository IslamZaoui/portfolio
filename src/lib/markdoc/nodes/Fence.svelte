<script>
	import { Button } from '@/components/ui/button';
	import { codeToHtml } from '../shiki';
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

	/**
	 * @type {boolean}
	 */
	export let process;

	let html = '';

	try {
		html = codeToHtml(content, language);
	} catch {
		process = false;
	}

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
	<div class="absolute right-0 top-3 flex w-full items-center justify-between px-4">
		<span class="text-lg font-bold text-primary">{language}</span>
		<Button
			size="icon"
			variant="ghost"
			title="copy button"
			on:click={onCopyClick}
			class="rounded-xl hover:bg-transparent"
		>
			{#key copyState}
				<span in:fade={{ duration: 200 }}>
					<svelte:component this={copyState ? check : copy} />
				</span>
			{/key}
		</Button>
	</div>
	{#if process}
		{@html html}
	{:else}
		<pre class="shiki bg-muted">
			<code>
				<slot />
			</code>
		</pre>
	{/if}
</section>

<style lang="postcss">
	:global(.shiki) {
		@apply rounded-xl p-4 pb-8 pt-14;
	}

	:global(.shiki code) {
		@apply text-wrap;
		counter-reset: step;
		counter-increment: step 0;
	}

	:global(.shiki code .line::before) {
		content: counter(step);
		counter-increment: step;
		width: 1rem;
		margin-right: 1.5rem;
		display: inline-block;
		text-align: right;
		color: rgba(115, 138, 148, 0.4);
	}
</style>
