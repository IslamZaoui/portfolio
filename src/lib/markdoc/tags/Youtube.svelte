<script>
	import Youtube from 'svelte-youtube-embed';
	export let id;
</script>

<div class="aspect-video py-2">
	<Youtube {id} />
</div>
