<script>
	export let category;

	const categories = [
		'FOOD',
		'Clothes',
		'Shelter',
		'Health',
		'Adoption',
		'School',
		'Funeral',
		'Company',
		'Wedding'
	];
	// export const filter = () => {
	// 	category.forEach((cat) => {
	// 		console.log(cat);
	// 	});
	// };

	function toggleCategory(cat) {
		console.log('cat ---->', cat);
		category = cat;
	}
</script>

<div class=" flex flex-row py-3 overflow-x-scroll scroll-smooth justify-start">
	{#each categories as cat}
		<button
			type="button"
			on:click={() => toggleCategory(cat)}
			class="  flex flex-auto rounded-lg bg-surface-400/20 mx-2 px-2 py-1">
			{cat}
		</button>
	{/each}
</div>
