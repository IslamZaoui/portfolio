<script lang="ts">
	export let text: string;
</script>

<main>
	<div>
		<p>{text}</p>
	</div>
</main>

<style>
	main {
		display: flex;
		height: 100%;
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		font-family: 'Noto Kufi';
	}
	main > div {
		text-align: center;
		font-size: 90px;
		font-weight: bold;
		color: black;
		display: flex;
		height: 100%;
		width: 100%;
		max-height: 80%;
		max-width: 90%;
		padding: 1rem;
		align-items: center;
		justify-content: center;
		border-radius: 24px;
		background-color: white;
	}
	main > div p {
		color: white;
	}
</style>
