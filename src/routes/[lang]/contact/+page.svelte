<script lang="ts">
	import config from '@config';
	import Mail from 'lucide-svelte/icons/mail';
	import Twitter from 'lucide-svelte/icons/twitter';
</script>

<section class="mb-8 w-full">
	<p>You have a project or idea that you'd like to discuss? I'd love to hear from you.</p>
	<p>Feel free to contact me on any of the following social media platforms or via email.</p>
</section>

<section class="w-full space-y-4">
	<div class="flex items-center gap-2">
		<Mail size="36" />
		<div class="flex flex-col">
			<h2 class="text-xl font-semibold">Email</h2>
			<a href="mailto:{config.email}" class="hover:underline">{config.email}</a>
		</div>
	</div>
	<div class="flex items-center gap-2">
		<Twitter size="36" />
		<div class="flex flex-col">
			<h2 class="text-xl font-semibold">X</h2>
			<a
				href="https://x.com/{config.social_links.Twitter}"
				class="hover:underline"
				rel="noreferrer"
				target="_blank">{config.social_links.Twitter}</a
			>
		</div>
	</div>
</section>
