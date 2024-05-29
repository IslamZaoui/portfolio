<script lang="ts">
	export let data: {
		name: string;
		url: string;
		icon: any;
		description: string;
	};
</script>

<a
	class="flex flex-col gap-1 mb-2 transform hover:-translate-y-1 transition"
	href={data.url}
	target="_blank"
	rel="noreferrer">
	<div
		class="size-[30px] flex justify-center items-center rounded-md bg-primary
		text-primary-foreground">
		<svelte:component this={data.icon} size="24" />
	</div>
	<h3>{data.name}</h3>
	<p class="text-muted-foreground text-sm">{data.description}</p>
</a>
