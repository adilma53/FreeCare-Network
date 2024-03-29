export async function load({ fetch }) {
	async function fetchPosts() {
		try {
			const response = await fetch('http://localhost:3000/post');
			const posts = await response.json();

			console.log('posts in load ---->:', posts);

			return posts;
		} catch (error) {
			console.log('error while fetching', error);
		}
	}

	return {
		posts: await fetchPosts()
	};
}
