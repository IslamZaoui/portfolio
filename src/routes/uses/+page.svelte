<script lang="ts">
	import Head from '@/components/custom/head.svelte';
	import * as m from '@i18n';
</script>

<Head title={m.USES()} />

<div class="mb-8 w-full space-y-4">
	<h2 class="text-3xl font-medium">{m.TK_USES()}</h2>
	<p>{m.TK_USESTXT()}</p>
</div>

<section class="w-full space-y-4">
	<h3 class="text-xl font-semibold">{m.TK_HW()}</h3>
	<ul class="ml-5 list-disc space-y-3">
		<li>
			{m.TK_HW_0_NAME()} - <span class="text-muted-foreground">{m.TK_HW_0_DESC()}</span>
		</li>
	</ul>
	<h3 class="text-xl font-semibold">{m.TK_SW()}</h3>
	<ul class="ml-5 list-disc space-y-3">
		<li>{m.TK_SW_0_NAME()} - <span class="text-muted-foreground">{m.TK_SW_0_DESC()}</span></li>
		<li>{m.TK_SW_1_NAME()} - <span class="text-muted-foreground">{m.TK_SW_1_DESC()}</span></li>
		<li>{m.TK_SW_2_NAME()} - <span class="text-muted-foreground">{m.TK_SW_2_DESC()}</span></li>
		<li>{m.TK_SW_3_NAME()} - <span class="text-muted-foreground">{m.TK_SW_3_DESC()}</span></li>
	</ul>
</section>
