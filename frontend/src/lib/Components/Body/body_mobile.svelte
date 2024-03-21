<script>
	import Food from '$lib/images/food.jpg';
	import { Avatar, Badge, Progressbar } from 'flowbite-svelte';
	import { ClockSolid } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';

	let progress;

	let avatar =
		'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

	export let post;

	// onMount(async () => {
	// 	async function fetchPosts() {
	// 		try {
	// 			const response = await fetch('http://localhost:3000/post');
	// 			const posts = await response.json();
	// 			posta = posts[0];
	// 			console.log('single post ---->', posta);
	// 		} catch (error) {
	// 			console.log('error while fetching', error);
	// 		}
	// 	}

	// 	await fetchPosts();
	// });

	console.log('post------->', post);
</script>

<section>
	<!-- container -->
	<div class=" container px-5 mx-auto">
		<!-- post card start here -->
		<!-- post owner name and post date -->
		<div class="px-1 flex my-3 items-center">
			<img class="rounded-full size-12 ring ring-blue-500 dark:ring-blue-300" src={avatar} alt="" />
			<div class=" mx-3">
				<h1 class="text-xl font-semibold text-gray-800 dark:text-gray-300">
					<!-- {'@' + post.author.username} -->
					ss
				</h1>
				<Badge class="h-4 text-xs text-gray-600 dark:text-gray-400" color="dark" border>
					<ClockSolid class="w-2.5 h-2.5 me-1.5" />
					<!-- {post.createdAt} -->
					dd
				</Badge>
			</div>
		</div>

		<!-- post image's -->
		<div class="">
			<img class="object-cover object-center w-full h-64 rounded-lg" src={Food} alt="" />
		</div>

		<div class="mt-5">
			<h1 class="mt-4 text-xl font-bold text-gray-800 dark:text-white">Free meals</h1>

			<p class="mt-2 text-gray-500 dark:text-gray-400">
				I have 10 meal vouchers for a local restaurant. DM me if you need it.
			</p>

			<div class="flex justify-between py-4">
				<p class="text-lg pt-2 font-meduim text-gray-500">3 hourse ago</p>
				<button
					class="p-2 px-3 rounded-xl bg-blue-400 text-white font-semibold"
					on:click={() => (progress = `${Math.round(Math.random() * 100)}`)}>
					Claim Offer
				</button>
			</div>
		</div>
		<Progressbar animate {progress} color="gray" />
	</div>
</section>
