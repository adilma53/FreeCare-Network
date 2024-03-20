<script>
	import { Filter, Body } from '$lib';

	export let data;
	const {posts} = data;

	console.log('posts in page---->',posts);

</script>

<main>
	<Filter />
	<Body posts={posts}/>


</main>
