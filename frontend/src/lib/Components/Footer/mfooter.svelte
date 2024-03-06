<script>
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	const home = async () => {
		goto('/');
	};

	const post = async () => {
		goto('/post');
	};

	const login = async () => {
		goto('/usr/login');
	};
</script>

<div
	class="fixed bottom-5 rounded-xl z-50 w-full h-16 bg-surface-200 dark:bg-surface-600 dark:border-[0.5px] border-surface-700"
>
	<div class="grid h-full flex items-stratch grid-cols-3 mx-auto">
		<button on:click={home}>
			<Icon icon="mingcute:home-3-fill" class="dark:text-surface-200 ml-10 h-8 w-8" />
		</button>
		<button on:click={post} type="button">
			<Icon icon="material-symbols-light:add" class="dark:text-surface-200 ml-10 h-8 w-8" />
		</button>
		<button on:click={login} type="button">
			<Icon icon="iconamoon:profile-thin" class="dark:text-surface-200 ml-10 h-8 w-8" />
		</button>
	</div>
</div>
