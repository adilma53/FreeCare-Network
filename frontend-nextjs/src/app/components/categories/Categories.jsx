"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export function Categories() {
  const categories = [
    {
      category: "Food",
      img: "/images/premium_photo-1663040178972-ee1d45d33899.jpeg",
    },
    {
      category: "Doctor",
      img: "",
    },
    {
      category: "Hygiene",
      img: "",
    },
    {
      category: "Financial",
      img: "",
    },
    {
      category: "Clothing",
      img: "",
    },
    {
      category: "Employment",
      img: "",
    },
    {
      category: "Legal_Aid",
      img: "",
    },
    {
      category: "Dental",
      img: "",
    },
    {
      category: "Veterinary",
      img: "",
    },
    {
      category: "MentalHealth",
      img: "",
    },
    {
      category: "Shelter",
      img: "",
    },
    {
      category: "Education",
      img: "",
    },
    {
      category: "Transportation",
      img: "",
    },
    {
      category: "Childcare",
      img: "",
    },
    {
      category: "Utilities",
      img: "",
    },
    {
      category: "Senior_Care",
      img: "",
    },
    {
      category: "Community_Support",
      img: "",
    },
    {
      category: "Disaster_Relief",
      img: "",
    },
    {
      category: "Environmental",
      img: "",
    },
    {
      category: "Emergency_Aid",
      img: "",
    },
  ];

  return (
    <div className="m-8 gap-2 grid grid-cols-2 sm:grid-cols-4">
      <Image src={categories[0].img} alt="Food" />

      {categories.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => (window.location.href = `/category/${item.category}`)}
        >
          <CardBody className="overflow-visible p-0">
            <Image
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
