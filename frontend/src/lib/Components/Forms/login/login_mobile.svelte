<div class="pt-24 flex items-center justify-center w-full">
	<div class="bg-surface-100 dark:bg-surface-700 shadow-xl rounded-xl px-8 py-10 space-y-5">
		<h1 class="text-2xl font-bold text-center mb-4 dark:text-surface-200">Welcome to FreeCare Net</h1>
		<form action="#">
			<div class="mb-4">
				<label for="email" class="block text-base font-medium text-surface-700 dark:text-surface-300 mb-3"
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
					class="block text-base font-medium text-surface-700 dark:text-surface-300 mb-3">Password</label
				>
				<input
					type="password"
					id="password"
					class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					placeholder="Enter your password"
					required
				/>
			</div>
			<div class="flex items-center justify-between mb-4">
				<div class="flex items-center">
					<input
						type="checkbox"
						id="remember"
						class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-indigo-500 focus:outline-none"
						checked
					/>
					<label for="remember" class="ml-2 block text-sm text-surface-500 dark:text-surface-300"
						>Remember me</label
					>
				</div>
				<a
					href="/auth/singup"
					class="text-xs text-primary-500 hover:text-primary-700 "
					>Create Account</a
				>
			</div>
			<button
				type="submit"
				class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-lg text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
				>Login</button
			>
		</form>
	</div>
</div>
