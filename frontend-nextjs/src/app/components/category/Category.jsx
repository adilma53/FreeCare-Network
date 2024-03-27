"use client";
import React, { useEffect, useState } from "react";
import { PostCardByCategory } from "./PostCardByCategory";
import { fetchGetPosts } from "~/services/posts";

export function Category({ categoryId }) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetchGetPosts(`/categories/${categoryId}`);

        console.log("🚀 ~ useEffect ~ res:", res);

        if (res) {
          setPosts(res);
        }
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      }
    }

    fetchData();
  }, []);
  // useEffect(async () => {
  //   const res = await fetchGetPosts();

  //   if (res) {
  //     setPosts(posts);
  //   }
  // }, []);

  return <PostCardByCategory posts={posts} />;
}
