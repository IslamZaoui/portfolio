<script>
	export let id;
</script>

<div class="my-2 aspect-video rounded-xl bg-muted">
	<iframe
		class="rounded-xl"
		width="100%"
		height="100%"
		src="https://www.youtube-nocookie.com/embed/{id}"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
</div>
