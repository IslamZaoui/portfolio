<script lang="ts">
	export let post: Post;
</script>

<a
	href="/blog/{post.slug}"
	class="w-full transform rounded-md border bg-muted p-3 transition hover:-translate-y-1 hover:bg-muted/50"
>
	<h3 class="text-xl font-semibold">{post.title}</h3>
	<p class="text-sm text-muted-foreground">{post.description}</p>
</a>
