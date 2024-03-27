// components/Body/insidepost.jsx
"use client";
import { useEffect, useState } from "react";
import { fetchGetPosts } from "~/services/posts";
import { Image, Button, User } from "@nextui-org/react";
import { timeSince } from "./mobile_body";

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
    <div className="grid grid-cols-1 items-center justify-center p-5 h-screen">
      {post ? (
        <div className="space-y-5">
          {/* author */}
          <div>
            <User
              className="pt-5 text-base font-sembold text-gray-400 dark:text-white"
              name="Ema"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          </div>
          {/* Image */}
          <div className="w-full h-full">
            <Image
              className="w-screen"
              isZoomed
              src={post.image}
              alt="Image from database"
            />
          </div>
          {/* title */}
          <div>
            <h1 className="text-lg font-bold">{post.title}</h1>
          </div>
          {/* text */}
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-justify ">
              {post.content}
            </p>
          </div>
          {/* createAt */}
          <div>
            <p className="text-base pt-2 font-meduim text-gray-500">
              {post.createdAt && (
                <span>{timeSince(new Date(post.createdAt))}</span>
              )}
            </p>
          </div>
          {/* button claim */}
          <div>
            <Button
              onClick={() => {
                console.log("offer claimed well see your email");
              }}
              color="primary"
              variant="ghost"
              className="w-full flex items-center justify-center text-base font-semibold"
            >
              Claim Offer
            </Button>
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
