// components/Body/insidepost.jsx
"use client";
import { useEffect, useState } from "react";
import { fetchGetPosts } from "~/services/posts";

export function InsidePost({ params }) {
  const [post, setPostId] = useState(null);

  useEffect(() => {
    async function FetchById() {
      try {
        const res = await fetchGetPosts(params.id);
        console.log("post id title --> ", res.title);
        if (res) {
          setPostId(res);
        }
      } catch (error) {
        console.error("fetching didn't goes well");
      }
    }
    FetchById();
  }, [params.id]);

  return (
    post &&
    post.length > 0 && (
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-blue-300">
          You are inside The Post with title: {params.id}
        </h1>
      </div>
    )
  );
}
