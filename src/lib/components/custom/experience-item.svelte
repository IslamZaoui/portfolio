<script lang="ts">
	import * as m from '@i18n';

	export let experience: Experience;
	export let index: number;

	$: background = index === 0 ? 'bg-primary' : 'bg-muted';
</script>

<li class="mb-10 ms-4">
	<div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border {background}" />
	<div class="flex flex-row items-center gap-2">
		<div class="text-md font-medium text-primary">{experience.title}</div>
		{#if index === 0}
			<div
				class="inline-block rounded-full border border-muted px-1 py-0 text-xs uppercase
				text-muted-foreground"
			>
				{m.PRESENT()}
			</div>
		{/if}
	</div>
	<div class="mb-4 text-sm font-normal text-muted-foreground">{experience.at}</div>
</li>
