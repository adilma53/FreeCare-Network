<script>
	import PostMobile from './post_mobile.svelte';
	import PostDesktop from './post_desktop.svelte';
</script>

<div class="md:hidden">
	<PostMobile />
</div>
<div class="hidden md:block">
	<PostDesktop />
</div>
