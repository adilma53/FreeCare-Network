<script>
	import { Filter } from '$lib';
	import axios from 'axios';

	let authorId = 17;
	let category = 'FOOD';

	let form;

	//  still not working
	async function handleSubmit() {
		let formData = new FormData(form);

		formData.set('expiresAt', new Date(form.expiresAt.value).toISOString());

		formData.set('authorId', authorId);
		formData.set('category', category);

		let formObject = Object.fromEntries(formData.entries());

		//log
		console.log('entries ---->', Object.fromEntries(formData.entries()));

		// fetch('http://localhost:3000/post/create', {
		// 	method: 'POST',
		// 	body: Object.fromEntries(formData.entries())
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => console.log(data))
		// 	.catch((err) => console.log(err));

		// axios.post('http://localhost:3000/post/create', Object.fromEntries(formData.entries()));

		axios
			.post('http://localhost:3000/post/create', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then((data) => console.log(data))
			.catch((err) => console.log(err));

		// logs
		console.log('title --->', formData.get('title'));
		console.log('content --->', formData.get('content'));
		console.log('image --->', formData.get('image'));
		console.log('authorId --->', formData.get('authorId'));
		console.log('category --->', formData.get('category'));
		console.log('expiresAt --->', formData.get('expiresAt'));
		console.log('new Date(expiresAtAsIso).toISOString() --->', expiresAtAsIso);

		console.log('form --->', form);
		console.log('formData --->', formData);

		console.log('from as json --->', JSON.stringify(formObject));
	}
</script>

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
	<!-- <div class="pt-2 w-[95]">
			<Filter />
		</div> -->

	<!-- Image input 
		<div class="col-span-full mt-3 flex justify-center">
			<div
				class="flex justify-center rounded-lg border border-dashed border-surface-700 dark:border-surface-300 w-[95%] py-7"
			>
				<div class="text-center">
					<svg
						class="mx-auto h-12 w-12 text-surface-700 dark:text-surface-300"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<div class="mt-4 flex text-sm leading-6 text-gray-600">
						<label
							for="file-upload"
							class="relative cursor-pointer rounded-md  font-semibold text-primary-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
						>
							<span>Upload a file</span>
							<input id="file-upload" name="file-upload" type="file" class="sr-only" />
						</label>
						<p class="pl-1">or drag and drop</p>
					</div>
					<p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
				</div>
			</div>
		</div> -->

	<!-- image -->
	<label class="pt-5" for="image_input">
		<input
			class="input rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
			type="file"
			name="image" />
	</label>
	<!-- <label class="pt-5" for="image_input">
		<input
			class="input rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
			placeholder="image here"
			type="text"
			name="image" />
	</label> -->
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
			required
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
