
export async function ApiPosts() {
  const posts = await fetch("https://freecare-network-nextjs.vercel.app/api/posts", {
    method: "GET"
  });
  return posts.json();
}
