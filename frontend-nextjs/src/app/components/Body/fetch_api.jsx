
export async function ApiPosts() {
  const posts = await fetch("http://localhost:3000/api/posts", {
    method: "GET"
  });
  return posts.json();
}
