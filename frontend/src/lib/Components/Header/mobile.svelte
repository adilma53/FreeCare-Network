<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	let title = 'FreeCare Net';
	const category = ['Food', 'Clothes', 'Shelter', 'Health', 'Adoption'];
	export const filter = () => {
		category.forEach((cat) => {
			console.log(cat);
		});
	};
</script>


<svelte:head>
  <title>{title}</title>
  <meta name="description" content="Offers for peoples who needs help" />
</svelte:head>

<header class="dark:text-surface-200 text-black">
	<div class="flex items-start justify-between pr-3">
		<div class="flex flex-row p-5 space-x-3">
			<!-- TODO: Avatar -->
			<!-- !Head title -->
			<div class="flex text-center justify-center font-semibold text-2xl">
				{title}
			</div>
		</div>
		<div class="py-6">
			<LightSwitch />
		</div>
	</div>
</header>
