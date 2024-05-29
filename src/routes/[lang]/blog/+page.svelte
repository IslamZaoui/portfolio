<script lang="ts">
	export let data;
</script>

<div class="w-full flex flex-col mx-auto gap-3">
	{#each data.posts as post}
		<a
			href="/{data.lang}/blog/{post.slug}"
			class="w-full rounded-md border bg-muted hover:bg-muted/50 p-3 transform hover:-translate-y-1 transition">
			<h2 class="text-xl font-semibold">{post.title}</h2>
			<p class="text-sm text-muted-foreground">{post.description}</p>
		</a>
	{/each}
</div>
