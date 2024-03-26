"use client";
import React, { useEffect, useState } from "react";
import { PostCardByCategory } from "./PostCardByCategory";
import { fetchGetPosts } from "~/services/posts";

export function Category({ categoryId }) {
  const [posts, setPosts] = useState();

  useEffect(async () => {
    const res = await fetchGetPosts("/categories/${categoryId}");

    if (res) {
      setPosts(posts);
    }
  }, []);

  return <PostCardByCategory myPosts={posts} />;
}
