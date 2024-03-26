"use client";

import React from "react";
import {
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  User,
  Avatar,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
// import { PlusIcon } from "./PlusIcon.jsx";

export function LoggedOutMenu() {
  const { data: session, status } = useSession();

  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: "before:bg-default-200", // change arrow background
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform rounded-full"
          color="primary"
          name="User"
          size="sm"
          //   src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem href="/auth/login" key="login">
            Log In
          </DropdownItem>

          <DropdownItem href="/auth/signup" key="signup">
            Sign Up
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem
            isReadOnly
            key="theme"
            className="cursor-default"
            endContent={
              <select
                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                id="theme"
                name="theme"
              >
                <option>System</option>
                <option>Dark</option>
                <option>Light</option>
              </select>
            }
          >
            Theme
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
