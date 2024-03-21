<script>
	import { Filter, Body } from '$lib';

	export let data;
	const { posts } = data;
</script>

<main>
	<Filter />
	<Body {posts} />
</main>
