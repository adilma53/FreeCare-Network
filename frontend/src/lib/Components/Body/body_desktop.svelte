<script>
	import food from '$lib/images/food.jpg';
</script>

<main class="flex-1">
	<div class="px-4 py-6">
		<div class="mt-6 space-y-6 flex items-center justify-center">
			<div
				class="flex items-center justify-between p-4 bg-surface-100 dark:bg-surface-600 rounded-lg">
				<div class="flex-1">
					<p class="text-xs text-gray-500">10 minutes ago</p>
					<h3 class="mt-1 text-lg font-semibold">Free Meal</h3>
					<p class="mt-1 text-sm ">
						Free meal at the local restaurant for 1 person. Please show this offer to the cashier to
						claim.
					</p>
					<button
						class="inline-flex text-white items-center justify-center rounded-md text-sm font-semibold  bg-primary-500 dark:bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-700 h-10 px-4 py-2 mt-4">
						Claim Offer
					</button>
				</div>
				<img
					src={food}
					alt="Free Meal"
					class="ml-4 w-36 h-24 rounded-md"
					width="150"
					height="100"
					style="aspect-ratio: 150 / 100; object-fit: cover;" />
			</div>
		</div>
	</div>
</main>
