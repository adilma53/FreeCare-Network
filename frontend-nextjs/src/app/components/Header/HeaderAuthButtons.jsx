"use client";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function HeaderAuthButtons() {
  const { data: session, status } = useSession();
  return (
    <div>
      {status == "authenticated" ? (
        <Button color="danger">Signout</Button>
      ) : (
        <div className="space-x-2">
          <Link href={"/auth/login"}>
            <Button variant="ghost" size="lg" color="primary">
              Login
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
