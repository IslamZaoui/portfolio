<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	interface Props {
		url: string;
		header: Snippet;
		footer: Snippet;
		children: Snippet;
	}

	let { url, header, footer, children }: Props = $props();
</script>

<div id="main" class="flex min-h-screen flex-col px-4 antialiased">
	<div class="mx-auto flex w-full flex-grow items-start justify-center">
		<div class="w-full max-w-3xl space-y-4">
			{@render header()}
			{#key url}
				<main
					in:fly={{ duration: 200, y: 20 }}
					class="flex flex-grow flex-col items-center justify-start gap-8"
				>
					{@render children()}
				</main>
			{/key}
		</div>
	</div>
</div>
{@render footer()}
