import Link from "next/link";
import React from "react";

import ThemeToggle from "@/Theme/ThemeToggle";

import UserAvatar from "./UserAvatar";

import Search from "./Search";

const Navbar = ({ heading, url }: { heading: string; url?: string }) => {
  return (
    <header className="sticky top-0 z-50">
      <nav
        className={
          "container flex h-16 items-center justify-between gap-4 bg-background px-4 max-md:shadow-sm md:h-20 md:px-0"
        }
      >
        <Link href={url || "/"} className="text-nowrap text-xl font-bold">
          {heading}
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          {heading !== "Admin Panel" && <Search />}
          <UserAvatar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;