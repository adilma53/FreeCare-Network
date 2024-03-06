<script>
	import BodyMobile from './body_mobile.svelte';
	import BodyDesktop from './body_desktop.svelte';
</script>

<div class="md:hidden">
	<BodyMobile />
</div>
<div class="hidden md:block">
	<BodyDesktop />
</div>
