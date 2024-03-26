"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export function Categories() {
  const categories = [
    {
      category: "Food",
      img: "https://images.unsplash.com/photo-1699959731697-a8211992989b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Clothing",
      img: "https://images.unsplash.com/photo-1699959731697-a8211992989b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Orange",
      img: "https://images.unsplash.com/photo-1699959731697-a8211992989b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Orange",
      img: "https://images.unsplash.com/photo-1699959731697-a8211992989b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Orange",
      img: "https://images.unsplash.com/photo-1699959731697-a8211992989b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Orange",
      img: "https://images.unsplash.com/photo-1699959731697-a8211992989b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Orange",
      img: "https://images.unsplash.com/photo-1699959731697-a8211992989b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Orange",
      img: "https://images.unsplash.com/photo-1699959731697-a8211992989b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Orange",
      img: "https://images.unsplash.com/photo-1699959731697-a8211992989b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="m-8 gap-2 grid grid-cols-2 sm:grid-cols-4">
      {categories.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => (window.location.href = `/category/${item.category}`)}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.category}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.category}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
