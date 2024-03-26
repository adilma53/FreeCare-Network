export async function fetchGetPosts(params = "") {
  try {
    const response = await fetch(`http://localhost:4000/post/${params}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
}

export async function fetchPostPosts(params) {}
