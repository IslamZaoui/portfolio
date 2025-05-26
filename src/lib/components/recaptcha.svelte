<script lang="ts">
	import { browser } from '$app/environment';
	import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';

	interface Props {
		token: string;
		onStatusChange?: (v: boolean) => void;
	}

	let { token = $bindable(''), onStatusChange }: Props = $props();

	if (browser) {
		window.onRecaptchaLoad = () => {
			onStatusChange?.(false);
		};

		window.onRecaptchaSuccess = (v) => {
			token = v;
			onStatusChange?.(true);
		};

		window.onRecaptchaExpired = () => {
			onStatusChange?.(false);
		};

		window.onRecaptchaError = () => {
			onStatusChange?.(false);
		};
	}
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad" async defer></script>
</svelte:head>

<div
	class="g-recaptcha"
	data-sitekey={PUBLIC_RECAPTCHA_SITE_KEY}
	data-callback="onRecaptchaSuccess"
	data-expired-callback="onRecaptchaExpired"
	data-error-callback="onRecaptchaError"
></div>
