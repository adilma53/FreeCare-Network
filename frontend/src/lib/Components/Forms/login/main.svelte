<script>
	import LoginMobile from './login_mobile.svelte';
	import LoginDesktop from './login_desktop.svelte';
</script>

<div class="md:hidden">
	<LoginMobile />
</div>
<div class="hidden md:block">
	<LoginDesktop />
</div>
