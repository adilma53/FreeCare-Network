// components/Body/insidepost.jsx
"use client";
import { useEffect, useState } from "react";
import { fetchGetPosts } from "~/services/posts";

export function InsidePost({ params }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function FetchPost() {
      try {
        const res = await fetchGetPosts(params.id); // Assuming this returns a single post object
        console.log("Fetched post:", res);
        setPost(res);
      } catch (error) {
        console.error("Fetching post failed:", error);
      }
    }
    FetchPost();
  }, [params.id]); // Make sure to include params.id in the dependency array

  return (
    <div className="flex items-center justify-center">
      {post ? (
        <div>
          <h1 className="text-2xl font-semibold text-blue-300">
            You are inside the post:
          </h1>
          <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            <p>Created at: {post.createdAt}</p>
          </div>
        </div>
      ) : (
        <h1 className="text-2xl font-semibold text-blue-300">
          Loading post...
        </h1>
      )}
    </div>
  );
}
