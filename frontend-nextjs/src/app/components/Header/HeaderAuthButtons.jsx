"use client";
import { Button } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter from 'next/router'
import React from "react";

export function HeaderAuthButtons() {
  const { data: session, status } = useSession();
  const router = useRouter();

  function handleSignout() {
    signOut();
    router.push("/auth/login");
  }

  if (status !== "loading") {
    return (
      <div>
        {status === "authenticated" ? (
          <Button onClick={handleSignout} color="danger">
            Signout
          </Button>
        ) : (
          <div className="space-x-2">
            <Link href="/auth/login">
              <Button variant="ghost" size="lg" color="primary">
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
