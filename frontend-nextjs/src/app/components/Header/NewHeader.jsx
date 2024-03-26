"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { SearchIcon } from "./SearchIcon";
import { LoggedInMenu } from "./LoggedInMenu";
import { LoggedOutMenu } from "./LoggedOutMenu";
import { useSession } from "next-auth/react";

// import { AcmeLogo } from "./AcmeLogo.jsx";
// import { SearchIcon } from "./SearchIcon.jsx";

export function NewHeader() {
  const { data: session, status } = useSession();

  return (
    <Navbar
      className="border-b border-neutral-500 dark:border-neutral-800 bg-neutral-900"
      isBordered
    >
      <NavbarContent justify="start">
        {/* logo */}
        {/* <Link href="/"> */}
        <NavbarBrand className=" cursor-pointer mr-4">
          <p className="font-bold text-inherit onfocus">FreeCareNet</p>
        </NavbarBrand>
        {/* </Link> */}

        {/* center buttons */}
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" aria-current="page" color="foreground">
              Post
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/auth/login" color="primary" aria-current="page">
              Log In
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {/* search bar */}
        <Input
          classNames={{
            base: " max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        {/* Dropdown */}
        {status === "authenticated" && status !== "loading" && <LoggedInMenu />}
        {status === "unauthenticated" && status !== "loading" && (
          <LoggedOutMenu />
        )}
      </NavbarContent>
    </Navbar>
  );
}
