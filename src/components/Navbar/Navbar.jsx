"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container/Container";
import { usePathname } from "next/navigation";
import { MenuScale, Wallet } from "iconoir-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Navbar = () => {
  const pathname = usePathname();
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <header className="relative w-full py-4">
      <Container fluid>
        <div className="relative flex items-center justify-between gap-5">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt=""
              width={200}
              height={200}
              priority
              className="w-16"
            />
          </Link>
          <div
            className={`relative max-lg:w-full max-lg:fixed max-lg:top-0 ${menuToggle ? "max-lg:left-0" : " max-lg:left-[-100%]"
              } transition-all duration-500 z-50`}
          >
            <div
              id="backdrop"
              className={`relative max-lg:fixed max-lg:top-0 max-lg:left-0 ${menuToggle ? "max-lg:visible max-lg:opacity-50" : "max-lg:invisible max-lg:opacity-0"
                } max-lg:w-full max-lg:h-full max-lg:bg-black max-lg:-z-10 transition-all duration-500`}
              onClick={() => setMenuToggle(!menuToggle)}
            ></div>
            <ul
              className={`relative flex items-center gap-9 max-lg:gap-6 font-chakra-petch max-lg:flex-col max-lg:fixed max-lg:top-0 ${menuToggle ? "max-lg:left-0" : " max-lg:left-[-100%]"
                } max-lg:w-60 max-lg:h-full max-lg:py-10 max-lg:bg-dark max-lg:overflow-y-auto transition-all duration-500`}
            >
              <li className="hidden max-lg:block">
                <Link href="/" className="block">
                  <Image
                    src="/images/logo.png"
                    alt=""
                    width={200}
                    height={200}
                    priority
                    className="w-24 mb-8"
                  />
                </Link>
              </li>
              <li className="block">
                <Link
                  href="/"
                  className={`block hover:text-purple-500 ${pathname === "/" ? "text-purple-600" : "text-black dark:text-white"
                    } transition-all duration-300`}
                >
                  Home
                </Link>
              </li>
              <li className="block">
                <Link
                  href="/projects"
                  className={`block hover:text-purple-500 ${pathname === "/projects" || pathname === "/project/id" ? "text-purple-600" : "text-black dark:text-white"
                    } transition-all duration-300`}
                >
                  Projects
                </Link>
              </li>
              <li className="block">
                <Link
                  href="/"
                  className="block text-black dark:text-white hover:text-purple-500 transition-all duration-300"
                >
                  Docs
                </Link>
              </li>
              <li className="block">
                <Link
                  href="/"
                  className="block text-black dark:text-white hover:text-purple-500 transition-all duration-300"
                >
                  Blogs
                </Link>
              </li>
              <li className="hidden max-lg:block">
                <ConnectButton />
              </li>
            </ul>
          </div>
          <div className="relative flex items-center gap-2">
            <ThemeToggler />
            <button
              type="button"
              className="relative hidden max-lg:inline-flex items-center gap-1 py-3 px-6 text-sm rounded-3xl bg-primary-gradient text-white z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:rounded-3xl before:bg-black before:opacity-0 hover:before:opacity-30 before:transition-all before:duration-300 before:-z-10"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <MenuScale />
            </button>
            <div className="block max-lg:hidden">
              <ConnectButton />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
