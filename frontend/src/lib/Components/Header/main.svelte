<script>
	import Mobile from './mobile.svelte';
	import Desktop from './desktop.svelte';
</script>

<div class="md:hidden">
	<Mobile />
</div>
<div class="hidden md:block">
	<Desktop />
</div>
