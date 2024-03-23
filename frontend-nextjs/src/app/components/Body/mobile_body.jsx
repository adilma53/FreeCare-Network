"use client"
// import { ApiPosts } from "./fetch_api";
import food from "@/public/food.jpg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";



export function BodyMobile() {
  // usestate
  // Fetch posts on component mount
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/post');
        const data = await response.json();
        // console.log("DATA POST --> ", data);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [posts]);


  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will be executed only on the client side
  }, []);

  return (
    <>
      {posts && posts.length > 0 && (
        posts.map((post) => (
          <div className="flex items-center justify-center p-3 ">
            <Card
              isPressable
              onPress={() => { console.log("into the post") }}
              className="px-auto py-auto"
            >
              <CardBody className="space-y-5">
                <div>
                  <Image
                    src={food}
                    alt="pic of food"
                    className="object-cover object-center w-full h-64 rounded-xl"
                  />
                  <h1 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
                    {post.title}
                  </h1>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {post.content}
                  </p>
                </div>
              </CardBody>
              <CardFooter className="p-2 flex justify-between py-6">
                <p className="text-lg pt-2 font-meduim text-gray-500">
                  {post.author.username}
                </p>
                {isClient && ( // Render button only on client-side
                  <Button
                    onClick={() => console.log("hello button")}
                    color="primary"
                    variant="flat"
                    radius="small"
                  >
                    Claim Offer
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        )))}
    </>
  );
}
