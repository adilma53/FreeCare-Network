"use client"
import food from "@/public/food.jpg"
import Image from "next/image";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
export function BodyMobile() {
  return (
    <>
      <div className="flex items-center justify-center p-3">
        <Card
          isPressable onPress={() => console.log("item pressed")}
          className="px-auto py-auto">
          <CardBody className="space-y-5">
            <div>
              <Image src={food} alt="pic of food" className="object-cover object-center w-full h-64 rounded-xl" />
              <h1 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">Iftar In Ramadan</h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                We offer free meals here in the shop for Ramadan
                Your are welcomed anyway 😊
              </p>
            </div>
          </CardBody>
          <CardFooter className="p-2 flex justify-between py-5">
            <p className="text-lg pt-2 font-meduim text-gray-500">3 hourse ago</p>
            <Button color="primary" variant="flat" radius="small">
              Claim Offer
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
