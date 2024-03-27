// components/Body/insidepost.jsx
"use client";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";
import { fetchGetPosts } from "~/services/posts";
import { Image, Button, User } from "@nextui-org/react";
import { timeSince } from "./mobile_body";

export function InsidePost({ params }) {
  const [post, setPost] = useState(null);
  const [countdownTarget, setCountdownTarget] = useState(null);

  useEffect(() => {
    async function FetchPost() {
      try {
        const res = await fetchGetPosts(params.id); // Assuming this returns a single post object
        console.log("Expire date ---> ", res.expiresAt);
        setPost(res);

        // Calculate the target time for countdown
        const currentTime = new Date();
        const expiryTime = new Date(res.expiresAt);
        setCountdownTarget(expiryTime);
      } catch (error) {
        console.error("Fetching post failed:", error);
      }
    }
    FetchPost();
  }, [params.id]); // Make sure to include params.id in the dependency array

  function RenderTimer({ completed, formatted }) {
    if (completed) {
      return (
        <div>
          <p className="flex items-center justify-center text-base font-semibold bg-neutral-600 rounded-xl px-3 py-3">
            The Offer is outdated
          </p>
        </div>
      );
    }
    return (
      <div>
        <h2 className="flex items-center justify-center text-base font-semibold bg-neutral-600 rounded-md px-3 py-3 ">
          Expaired after : {formatted.hours}:{formatted.minutes}:
          {formatted.seconds}
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-center justify-center p-3 min-h-screen">
      {post ? (
        <div className="space-y-5">
          {/* author */}
          <div>
            <User
              className="pt-2 text-base font-sembold text-gray-400 dark:text-white"
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
          {/* counte down timer */}
          <Countdown
            date={countdownTarget}
            renderer={RenderTimer}
            autoStart={true}
          />

          {/* button claim */}
          <div>
            <Button
              onClick={() => {
                console.log("offer claimed well see your email");
              }}
              radius="md"
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

// Free Books Giveaway: Empower Minds with Knowledge
