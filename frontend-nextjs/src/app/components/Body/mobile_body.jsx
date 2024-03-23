"use client"
import { ApiPosts } from "./fetch_api";
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
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await ApiPosts();
        setPost(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [post]);


  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will be executed only on the client side
  }, []);

  return (
    <>
      {post && post.length > 0 && (
        <div className="flex items-center justify-center p-3">
          <Card
            isPressable
            onPress={() => {console.log("into the post")}}
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
                  {post[0].title}
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {post[0].content}
                </p>
              </div>
            </CardBody>
            <CardFooter className="p-2 flex justify-between py-5">
              <p className="text-lg pt-2 font-meduim text-gray-500">
                {post[0].date}
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
      )}
    </>
  );
}
