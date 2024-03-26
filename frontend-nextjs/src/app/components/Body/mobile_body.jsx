"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export function BodyMobile() {
  // usestate
  // Fetch posts on component mount
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/post");
        const data = await response.json();
        // console.log("DATA POST --> ", data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true); // This will be executed only on the client side
  // }, []);

  //convert time into text
  const timeSince = (dateString) => {
    const date = new Date(dateString); // Parse the ISO 8601 string
    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = [
      { limit: 31536000, label: "year" },
      { limit: 2592000, label: "month" },
      { limit: 86400, label: "day" },
      { limit: 3600, label: "hour" },
      { limit: 60, label: "minute" },
      { limit: 1, label: "second" },
    ];

    for (let i = 0; i < intervals.length; i++) {
      const interval = intervals[i];
      const count = Math.floor(seconds / interval.limit);
      if (count > 0) {
        const plural = count === 1 ? "" : "s";
        return `${count} ${interval.label}${plural} ago`;
      }
    }
    return "just now";
  };

  // post content len
  const PostContent = (post) => {
    const content = post.content;
    const MAXLEN = 300;
    if (content.length > MAXLEN) {
      return (
        <>
          {content.substring(0, MAXLEN)}...{" "}
          <span
            className="text-blue-500 cursor-pointer"
          >
            Read more
          </span>
        </>
      );
    }
    return content;
  }

  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts
          .slice()
          .reverse()
          .map((post) => (
            <div className="grid grid-cols-1 justify-center p-3 " key={post.id}>
              <Card
                isPressable
                onPress={() => {
                  let PostId = post.id;
                  window.location.href = `userpost/${PostId}`;
                }}
                className="px-auto py-auto "
              >
                <CardBody className="w-full h-full">
                  <div>
                    <Image isZoomed src={post.image} alt="NextUI hero Image" />
                    <h1 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
                      {post.title}
                    </h1>
                    <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                      {PostContent(post)}
                    </p>
                  </div>
                </CardBody>
                <CardFooter className="p-2 flex justify-between py-6">
                  <p className="text-base pt-2 font-meduim text-gray-500">
                    {post.author.username}
                  </p>
                  <p className="text-base pt-2 font-meduim text-gray-500">
                    {post.createdAt && (
                      <span>{timeSince(new Date(post.createdAt))}</span>
                    )}
                  </p>
                </CardFooter>
              </Card>
            </div>
          ))}
    </>
  );
}
