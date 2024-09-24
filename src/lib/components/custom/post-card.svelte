<script lang="ts">
	import { page } from '$app/stores';

	export let post: Post;

	let isBlog = /^(\/en\/blog|\/ar\/blog)/.test($page.url.pathname);
	let header = isBlog ? 'h3' : 'h4';
</script>

<a
	href="/blog/{post.slug}"
	class="w-full transform rounded-md border bg-muted p-3 transition hover:-translate-y-1 hover:bg-muted/50"
>
	<svelte:element this={header} class="text-xl font-semibold">{post.title}</svelte:element>
	<p class="text-sm text-muted-foreground">{post.description}</p>
</a>
