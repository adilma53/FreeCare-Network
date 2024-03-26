"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { Input } from "@nextui-org/react";

export default function admin() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }

  return (
    <a className="text-red-500" href="/auth/login">
      not admin please Sign in
    </a>
  );
}
