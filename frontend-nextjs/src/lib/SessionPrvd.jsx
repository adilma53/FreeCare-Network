"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function SessionPrvd({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
