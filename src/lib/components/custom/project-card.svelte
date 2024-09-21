<script lang="ts">
	export let project: Project;
</script>

<a
	class="mb-2 flex transform flex-col gap-1 transition hover:-translate-y-1"
	href={project.url}
	target="_blank"
	rel="noreferrer"
>
	<div class="flex size-[40px] items-center justify-center rounded-md border-2 bg-white p-1">
		<img src={project.icon} alt="{project.name} logo" />
	</div>
	<h3>{project.name}</h3>
	<p class="text-sm text-muted-foreground">{project.description}</p>
</a>
