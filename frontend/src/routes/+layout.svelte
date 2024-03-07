<script>
	import '../app.postcss';
	import { Footer, Header } from '$lib';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
