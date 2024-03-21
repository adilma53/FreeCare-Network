<script>
	import { Filter } from '$lib';
	import axios from 'axios';

	let authorId = 'e39f3c31-f20a-4790-8412-5f8ac9578253';
	let form;

	let category;
	const categories = [
		'Food',
		'Doctor',
		'Hygiene',
		'Financial',
		'Clothing',
		'Employment',
		'Legal_Aid',
		'Dental',
		'Veterinary',
		'MentalHealth'
	];

	let chosenCategories = [];

	function chooseCategory(cat) {
		if (chosenCategories.includes(cat)) {
			chosenCategories = chosenCategories.filter((item) => item !== cat);
		} else {
			chosenCategories = [...chosenCategories, cat];
		}
	}

	//  still not working
	async function handleSubmit() {
		let formData = new FormData(form);

		if (form.expiresAt.value) {
			console.log('form.expiresAt.value----->', form.expiresAt.value);
			formData.set('expiresAt', new Date(form.expiresAt.value).toISOString());
		} else {
			console.log('form.expiresAt.value NUll----->', form.expiresAt.value);

			formData.set('expiresAt', null);
		}

		formData.set('authorId', authorId);

		// Convert chosenCategories to an array of Category IDs
		// let categoryIds = chosenCategories.map((cat) => ({ id: cat }));

		// Set category field to the array of Category IDs
		formData.set('category', JSON.stringify(chosenCategories));

		console.log('categories in formdata ---->', formData.get('category'));

		let formObject = Object.fromEntries(formData.entries());

		console.log('formdata ---->', [...formData]);

		axios
			.post('http://localhost:3000/post/create', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	}
</script>

<section class="grid grid-cols-1 flex pt-2 items-center justify-center text-center">
	<h1 class="text-3xl font-semibold mb-2">Create Post</h1>

	<!-- title -->
	<form bind:this={form} on:submit={handleSubmit}>
		<label class="flex items-center justify-center">
			<input
				class="input rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
				type="text"
				name="title"
				required
				placeholder="Title" />
		</label>
		<!-- Description -->

		<label class="pt-3">
			<textarea
				class="textarea rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
				rows="5"
				placeholder="Description goes here"
				name="content" />
		</label>
		<!-- category -->
		<div class="flex flex-row py-3 overflow-x-scroll scroll-smooth justify-start">
			{#each categories as cat}
				<button
					type="button"
					on:click={() => chooseCategory(cat)}
					class="{chosenCategories.includes(cat) &&
						'border-2 border-blue-500'} flex flex-auto rounded-lg bg-surface-400/20 mx-2 px-2 py-1">
					{cat}
				</button>
			{/each}
		</div>

		<!-- <Filter bind:category /> -->

		<!-- image -->
		<label class="pt-5" for="image_input">
			<input
				class="input rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
				type="file"
				name="image" />
		</label>

		<!-- Number of claims -->
		<label for="number_clamed" class="pt-5">
			<input
				class="input rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
				placeholder="Claim limits"
				type="number"
				required
				name="claimLimit" />
		</label>
		<!-- expire date -->
		<label for="expire_date" class="pt-5">
			<input
				class="input rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
				placeholder="Expiration Date"
				type="date"
				name="expiresAt" />
		</label>
		<!-- Create button -->
		<div class="pt-5 flex justify-center">
			<button
				type="submit"
				class="p-2 py-3 px-3 text-base font-semibold w-[95%] bg-primary-500 rounded-md border border-primary-300 hover:border-primary-500 hover:bg-primary-700">
				Create
			</button>
		</div>
	</form>
</section>
