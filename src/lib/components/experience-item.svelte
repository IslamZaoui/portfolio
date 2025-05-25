<script lang="ts">
	import type { Experience } from '@/types';

	const { experience, index } = $props<{ experience: Experience; index: number }>();
	const background = index === 0 ? 'bg-primary' : 'bg-muted';
</script>

<li class="ms-4 mb-10">
	<div class="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border {background}"></div>
	<div class="flex flex-row items-center gap-2">
		<div class="text-md font-medium">{experience.title}</div>
		{#if index === 0}
			<div
				class="border-muted text-muted-foreground inline-block rounded-full border px-1 py-0 text-xs
				uppercase"
			>
				Present
			</div>
		{/if}
	</div>
	<div class="text-muted-foreground mb-4 text-sm font-normal">{experience.at}</div>
</li>
