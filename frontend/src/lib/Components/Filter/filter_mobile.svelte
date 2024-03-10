<script>
	const category = ['Food', 'Clothes', 'Shelter', 'Health', 'Adoption', 'School', 'Funeral', 'Company', 'Widding'];
	export const filter = () => {
		category.forEach((cat) => {
			console.log(cat);
		});
	};
</script>

<div class="flex flex-row pt-5 overflow-x-scroll scroll-smooth">
	{#each category as cat}
		<div class="flex flex-auto justify-evenly rounded-lg bg-surface-400/20 mx-2">
			<button on:click={filter} class=" px-2 py-1">
				<input type="radio" class="hidden" id={cat} />
				<label class="cursor-pointer" for={cat}>{cat}</label>
			</button>
		</div>
	{/each}
</div>
