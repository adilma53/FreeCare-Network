<script>
	import BodyMobile from './body_mobile.svelte';
	import BodyDesktop from './body_desktop.svelte';

	export let posts;

	console.log('main posts ---->', posts);
	console.log('main posts 2 ---->', posts[1]);
</script>

<div class="md:hidden">
	{#each posts as post}
		<BodyMobile {post} />
	{/each}
</div>

<!-- <div class="md:hidden">
	<BodyMobile />
</div> -->
<div class="hidden md:block">
	<BodyDesktop />
</div>
