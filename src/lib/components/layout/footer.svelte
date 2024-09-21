<script>
	import config from '@config';
	// @ts-ignore
	import image from '@assets/palestine.webp?enhance';
	import * as m from '@i18n';
</script>

<footer class="mt-16 flex flex-col items-center justify-center gap-2 p-4 pb-8">
	<img src={image} alt="palestine" class="size-[90px]" />
	<p class="text-sm">
		{m.COPYRIGHT()}
	</p>
	<p>
		<span
			><a
				class="anchor text-sm font-bold"
				href={config.REPOSITORY}
				target="_blank"
				rel="noopener noreferrer">{m.SOURCE()}</a
			></span
		>
	</p>
</footer>
