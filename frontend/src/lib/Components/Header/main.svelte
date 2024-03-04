<script>
	import Mobile from './mobile.svelte';
	import Desktop from './desktop.svelte';
</script>

<header class="w-full m-auto text-2xl md:text-5xl border-b-[0.5px] border-gray-300">
	<div class="md:hidden">
			<Mobile />
	</div>
	<div class="hidden md:block">
		<Desktop />
	</div>
</header>

