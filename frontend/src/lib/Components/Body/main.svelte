<script>
	import BodyMobile from './body_mobile.svelte';
	import BodyDesktop from './body_desktop.svelte';

	export let posts;

</script>




<div class="md:hidden">
	{#each posts as post}
		<BodyMobile />
	{/each}
</div>

<div class="md:hidden">
	<BodyMobile />
</div>
<div class="hidden md:block">
	<BodyDesktop />
</div>
