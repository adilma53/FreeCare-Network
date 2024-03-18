<div class="pt-20 flex items-center justify-center w-full">
	<div class="bg-surface-100 dark:bg-surface-700 shadow-xl rounded-xl px-8 py-10 space-y-5">
		<h1 class="text-2xl font-bold text-center mb-4 dark:text-surface-200">
			Sign up to FreeCare Net
		</h1>
		<form action="?/singup">
			<div class="mb-4">
				<label
					for="fullname"
					class="block text-base font-medium text-surface-700 dark:text-surface-300 mb-3"
					>Full name</label
				>
				<input
					type="name"
					name="full_name"
					class="shadow-sm rounded-md w-full px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					placeholder="Jack James"
					required
				/>
			</div>
			<div class="mb-4">
				<label
					for="email"
					class="block text-base font-medium text-surface-700 dark:text-surface-300 mb-3"
					>Email Address</label
				>
				<input
					type="email"
					id="email"
					class="shadow-sm rounded-md w-full px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					placeholder="your@email.com"
					required
				/>
			</div>
			<div class="mb-4">
				<label
					for="password"
					class="block text-base font-medium text-surface-700 dark:text-surface-300 mb-3"
					>Password</label
				>
				<input
					type="password"
					id="password"
					class="shadow-sm rounded-md w-full px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					placeholder="Enter your password"
					required
				/>
			</div>
			<button
				type="submit"
				class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
				>Sign up</button
			>
		</form>
	</div>
</div>
