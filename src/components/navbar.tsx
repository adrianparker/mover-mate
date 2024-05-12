import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme-toggle-button";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <h1>Mover Mate</h1>
      </Link>
      <div>
        <Link href="/new">Add new item</Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
