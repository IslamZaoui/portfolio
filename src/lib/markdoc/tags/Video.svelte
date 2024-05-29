<script>
	export let src;
	export let title;
</script>

<div class="my-2">
	<video {src} {title} class="aspect-video rounded-xl w-full" playsinline controls>
		<track kind="captions" />
	</video>
</div>
