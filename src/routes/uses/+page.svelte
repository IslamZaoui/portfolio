<script lang="ts">
	import Head from '@/components/custom/seo.svelte';
	import * as m from '@i18n';

	let { data } = $props();
</script>

<Head title={m.USES()} />

<div class="mb-8 w-full space-y-4">
	<h2 class="text-3xl font-medium">{m.TK_USES()}</h2>
	<p>{m.TK_USESTXT()}</p>
</div>

<section class="w-full space-y-4">
	{#each Object.entries(data.uses) as [title, tools]}
		<h3 class="text-xl font-semibold">{title}</h3>
		<ul class="mx-9 list-disc space-y-3">
			{#each tools as tool}
				<li>
					<svelte:element
						this={tool.url ? 'a' : 'span'}
						dir="ltr"
						class={tool.url ? 'hover:underline' : ''}
						href={tool.url}
						target="_blank"
					>
						{tool.name}
					</svelte:element>
					{#if tool.description}
						-
						<span class="text-muted-foreground">{tool.description}</span>
					{/if}
				</li>
			{/each}
		</ul>
	{/each}
</section>
