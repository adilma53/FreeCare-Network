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
          <AcmeLogo />
          <p className="hidden sm:block font-bold text-inherit onfocus">ACME</p>
        </NavbarBrand>
        {/* </Link> */}

        {/* center buttons */}
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
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
        {status === "authenticated" && status !== "loading" ? (
          <LoggedInMenu />
        ) : (
          <LoggedOutMenu />
        )}
      </NavbarContent>
    </Navbar>
  );
}
