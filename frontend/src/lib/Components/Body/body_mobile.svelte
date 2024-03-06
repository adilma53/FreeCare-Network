<script>
	import Food from '$lib/images/food.jpg';
	const claim = () => {
		console.log('claim');
	};
</script>

<section>
	<!-- container -->
	<div class="container px-5 py-9 mx-auto">
		<!-- post card start here -->
		<div class="grid grid-cols-1 gap-8">
			<div>
				<img class="object-cover object-center w-full h-64 rounded-lg" src={Food} alt="" />

				<div class="mt-5">
					<h1 class="mt-4 text-xl font-bold text-gray-800 dark:text-white">Free meals</h1>

					<p class="mt-2 text-gray-500 dark:text-gray-400">
						I have 10 meal vouchers for a local restaurant. DM me if you need it.
					</p>
					<div
						class="flex justify-between pt-2
						"
					>
						<p class="text-lg pt-2 font-meduim text-gray-500">3 hourse ago</p>
						<button
							on:click={claim}
							class="p-2 px-3 rounded-xl bg-primary-400 text-white font-semibold"
						>
							Claim Offer
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
