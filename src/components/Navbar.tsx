"use client";

import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import MenuOverlay from "./MenuOverlay";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { ModeToggle } from "./ModeToggle";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Download",
    path: "/download",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 border-b-2 bg-white dark:bg-[#020817] bg-opacity-90 dark:bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/">
          <Image
            alt="Giovanni Site Logo"
            src="/images/no-background-logo.png"
            width={60}
            height={60}
            priority={true}
          />
        </Link>
        <div className="flex items-center">
          <div className="menu hidden mr-3 md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLinks href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          {/* Only show ModeToggle in the main navbar when the menu is closed */}
          <div className={`hidden md:block ${navbarOpen ? "hidden" : ""}`}>
            <ModeToggle />
          </div>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} extra={<ModeToggle />} />
      ) : null}
    </nav>
  );
};

export default Navbar;
