<script module lang="ts">
	export type RecaptchaStatus = 'ready' | 'success' | 'error' | 'expired';
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';
	import { mode } from 'mode-watcher';

	interface Props {
		token: string;
		onStatusChange?: (v: RecaptchaStatus) => void;
	}

	let { token = $bindable(''), onStatusChange }: Props = $props();

	if (browser) {
		window.onRecaptchaLoad = () => {
			onStatusChange?.('ready');
		};

		window.onRecaptchaSuccess = (v) => {
			token = v;
			onStatusChange?.('success');
		};

		window.onRecaptchaExpired = () => {
			onStatusChange?.('expired');
		};

		window.onRecaptchaError = () => {
			onStatusChange?.('error');
		};
	}
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback" async defer></script>
</svelte:head>

<div
	class="g-recaptcha"
	data-theme={$mode ?? 'light'}
	data-sitekey={PUBLIC_RECAPTCHA_SITE_KEY}
	data-callback="onRecaptchaSuccess"
></div>
