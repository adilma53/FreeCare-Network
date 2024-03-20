<script>
	import BodyMobile from './body_mobile.svelte';
	import BodyDesktop from './body_desktop.svelte';

	export let posts;

	console.log('posts in main---->',posts);
</script>

<!-- <div class="md:hidden">
	{#await posts then posts}
	  {#each posts as post}
		<BodyMobile {post}/>
	  {/each}
	{:catch error}
	  <p>Error: {error.message}</p>
	{/await}
  </div> -->



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
