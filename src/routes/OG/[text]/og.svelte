<script lang="ts">
	export let text: string;
</script>

<div class="card">
	<div class="text-center">{text}</div>
</div>

<style>
	.card {
		background: linear-gradient(to bottom right, #181515, #000000);
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
	}

	.text-center {
		text-align: center;
		font-size: 5.5rem;
		color: white;
		font-weight: bold;
	}
</style>
