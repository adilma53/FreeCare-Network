"use client";

import React from "react";
import {
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
import { useRouter } from "next/navigation";
// import { PlusIcon } from "./PlusIcon.jsx";

export function LoggedInMenu() {
  const { data: session, status } = useSession();
  const router = useRouter();

  async function handleSignout() {
    await signOut();
    router.push("/auth/login");
  }

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
          className=" transition-transform"
          color="secondary"
          name="Jason Hughes"
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
          <DropdownItem
            isReadOnly
            key="profile"
            className="h-14 gap-2 opacity-100"
          >
            <User
              name={session.user.email}
              // description={session.user.email}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              // avatarProps={{
              //   size: "sm",
              //   src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              //   radius: "sm",
              // }}
            />
          </DropdownItem>
          <DropdownItem key="dashboard">Profile</DropdownItem>
          <DropdownItem key="new_post">New Post</DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem key="quick_search" shortcut="⌘K">
            Search Posts
          </DropdownItem>
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
          <DropdownItem onClick={handleSignout} color="danger" key="logout">
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
