<script>
	import SingupMobile from './signup_mobile.svelte';
	import SingupDesktop from './signup_desktop.svelte';
</script>

<div class="md:hidden">
	<SingupMobile />
</div>
<div class="hidden md:block">
	<SingupDesktop />
</div>
