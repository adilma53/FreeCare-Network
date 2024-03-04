<script>
	let offerAid = 'Offers of Aid';
	const category = ['Food', 'Clothes', 'Shelter', 'Health', 'Adoption'];
	const filter = () => {
		category.forEach((cat) => {
			console.log(cat);
		});
	};
</script>

<header>
	<!-- TODO: Avatar -->
	<!-- !Head title -->
	<div class="p-2 flex text-center justify-center font-semibold text-lg">
		{offerAid}
	</div>
	<!-- TODO: filter design -->
	<div class="flex flex-row pt-5 overflow-x-scroll">
		{#each category as cat}
			<div
				class="flex flex-auto justify-evenly border rounded-lg border-gray-300 bg-gray-200/50 mx-3 dark:border-gray-600/60 dark:text-white"
			>
				<button on:click={filter} class=" px-2 py-1">
					<input type="radio" class="hidden" id={cat} />
					<label class="cursor-pointer" for={cat}>{cat}</label>
				</button>
			</div>
		{/each}
	</div>
</header>
