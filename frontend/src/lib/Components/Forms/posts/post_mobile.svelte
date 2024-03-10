<script>
	import { Filter } from '$lib';
</script>

<section class="grid grid-cols-1 flex pt-2 items-center justify-center text-center">
	<h1 class="text-3xl font-semibold mb-2">Create Post</h1>

	<!-- title -->
	<form action="?/post">
		<label class="flex items-center justify-center">
			<input
				class="input rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
				type="text"
				name="title"
				required
				placeholder="Title"
			/>
		</label>
		<!-- Description -->

		<label class="pt-3">
			<textarea
				class="textarea rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
				rows="5"
				placeholder="Description goes here"
			/>
		</label>
		<!-- category -->
		<div class="pt-2 w-[95]">
			<Filter />
		</div>
		<!-- Image input -->
		<label class="pt-5" for="image_input">
			<input
				class="input rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
				type="file"
			/>
		</label>
		<!-- Number of claims -->
		<label for="number_clamed" class="pt-5">
			<input
				class="input rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
				placeholder="Claim limits"
				name="claim"
				type="number"
				required
			/>
		</label>
		<!-- expire date -->
		<label for="expire_date" class="pt-5">
			<input
				class="input rounded-md w-[95%] border border-surface-500 dark:border-surface-200"
				placeholder="Expiration Date"
				name="date_expire"
				type="date"
				required
			/>
		</label>
		<!-- Create button -->
		<div class="pt-5 flex justify-center">
			<button
				type="submit"
				class="p-2 py-3 px-3 text-base font-semibold w-[95%] bg-primary-500 rounded-md border border-primary-300 hover:border-primary-500 hover:bg-primary-700"
			>
				Create
			</button>
		</div>
	</form>
</section>
