<script lang="ts">
    import { page } from '$app/stores';
    import Button from '@/components/ui/button/button.svelte';
</script>

<svelte:head>
    <title>Islam Zaoui | Error {$page.status}</title>
</svelte:head>

<div class="flex flex-col justify-center h-screen items-center gap-4">
    <span class="text-6xl font-bold text-background-foreground">Error {$page.status}</span>

    {#if $page.error?.message}
        <span class="text-2xl text-muted-foreground">{$page.error?.message}</span>
    {/if}

    <Button on:click={() => {
        if (window.history.length > 1 && document.referrer) {
            window.history.back();
        } else {
            window.location.href = '/en';
        }
    }}>
        Back to Previous Page
    </Button>
</div>
