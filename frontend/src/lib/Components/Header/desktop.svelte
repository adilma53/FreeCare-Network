<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<aside
	id="separator-sidebar"
	class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
	aria-label="Sidebar">
	<div
		class="h-full px-3 py-4 overflow-y-auto bg-surface-50 dark:bg-surface-700 border-r-[0.5px] border-surface-400">
		<ul class="space-y-2 font-medium">
			<li>
				<a
					href="/"
					class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-600 group">
					<svg
						class="w-5 h-5 text-gray-500 transition duration-75 dark:text-surface-300 group-hover:text-primary-700 dark:group-hover:text-primary-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 48 48"
						{...$$props}>
						<path
							fill="currentColor"
							d="M26.394 5.855a3.778 3.778 0 0 0-4.788 0L8.431 16.597A3.91 3.91 0 0 0 7 19.628v19.485C7 41.26 8.713 43 10.825 43h4.35C17.288 43 19 41.26 19 39.113V30.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v8.613C29 41.26 30.712 43 32.825 43h4.35C39.288 43 41 41.26 41 39.113V19.628a3.91 3.91 0 0 0-1.431-3.031z" />
					</svg>
					<span class="ms-3">Home</span>
				</a>
			</li>
			<li>
				<a
					href="/post"
					class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-600 group">
					<svg
						class="w-5 h-5 text-gray-500 transition duration-75 dark:text-surface-300 group-hover:text-primary-700 dark:group-hover:text-primary-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="-0.5 -0.5 24 24"
						{...$$props}>
						<path
							fill="currentColor"
							d="m21.289.98l.59.59c.813.814.69 2.257-.277 3.223L9.435 16.96l-3.942 1.442c-.495.182-.977-.054-1.075-.525a.928.928 0 0 1 .045-.51l1.47-3.976L18.066 1.257c.967-.966 2.41-1.09 3.223-.276zM8.904 2.19a1 1 0 1 1 0 2h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a1 1 0 0 1 2 0v4a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4z" />
					</svg>
					<span class="ms-3">Post</span>
				</a>
			</li>
		</ul>
		<!-- split the nav-->
		<div class="pt-4 mt-4 space-y-2 border-t-[0.4px] border-surface-700 dark:border-surface-400">
			<ul class="font-semibold fixed bottom-2">
				<li>
					<a
						href="/auth/login"
						class="flex items-center p-2 text-surface-900 rounded-lg dark:text-white hover:bg-surface-100 dark:hover:bg-surface-600 group">
						<svg
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-surface-300 group-hover:text-primary-700 dark:group-hover:text-primary-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 36 36"
							{...$$props}>
							<path
								fill="currentColor"
								d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.51 1.51 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.51 1.51 0 0 0-.39-.98"
								class="clr-i-solid clr-i-solid-path-1" />
							<circle
								cx="18"
								cy="10"
								r="7"
								fill="currentColor"
								class="clr-i-solid clr-i-solid-path-2" />
							<path fill="none" d="M0 0h36v36H0z" />
						</svg>
						<span class="ms-3">Log In</span>
					</a>
				</li>
				<li class="py-3 px-3">
					<LightSwitch />
				</li>
			</ul>
		</div>
	</div>
</aside>
