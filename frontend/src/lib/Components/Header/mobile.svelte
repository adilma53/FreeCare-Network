<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	let offerAid = 'Home';
	const category = ['Food', 'Clothes', 'Shelter', 'Health', 'Adoption'];
	export const filter = () => {
		category.forEach((cat) => {
			console.log(cat);
		});
	};
</script>

<header class="dark:text-surface-200 text-black">
	<div class="flex items-start justify-between pr-3">
		<div class="flex flex-row p-5 space-x-3">
			<!-- TODO: Avatar -->
			<!-- !Head title -->
			<div class="flex text-center justify-center font-semibold text-2xl">
				{offerAid}
			</div>
		</div>
		<div class="py-6">
			<LightSwitch />
		</div>
	</div>

	<!-- TODO: filter design -->
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
</header>
