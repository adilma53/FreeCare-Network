<script>
	import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	let offerAid = 'Home';
	const category = ['Food', 'Clothes', 'Shelter', 'Health', 'Adoption'];
	const filter = () => {
		category.forEach((cat) => {
			console.log(cat);
		});
	};
</script>

<header class="dark:text-surface-200 text-black">
	<div class="grid grid-flow-col items-center justify-between">
		<div class="flex flex-row pt-5 mx-5 space-x-3">
			<!-- TODO: Avatar -->
			<Avatar
				src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
				width="w-9"
				rounded="rounded-full"
			/>
			<!-- !Head title -->
			<div class="flex text-center justify-center font-semibold text-2xl">
				{offerAid}
			</div>
		</div>
		<div class="py-5">
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
