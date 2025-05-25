<script lang="ts">
	import AlertCircleIcon from '@lucide/svelte/icons/alert-circle';
	import CheckCircleIcon from '@lucide/svelte/icons/check-circle';
	import InfoIcon from '@lucide/svelte/icons/info';

	import * as Alert from '@/components/ui/alert';

	const { type = 'info', text }: App.Superforms.Message = $props();
	const variant = type === 'error' ? 'destructive' : 'default';
	const Icon = type === 'error' ? AlertCircleIcon : type === 'success' ? CheckCircleIcon : InfoIcon;
</script>

<Alert.Root {variant}>
	<Icon class="size-4" />
	<Alert.Title
		>{type === 'error' ? 'Error' : type === 'success' ? 'Success' : 'Heads up!'}</Alert.Title
	>
	<Alert.Description>{text}</Alert.Description>
</Alert.Root>
