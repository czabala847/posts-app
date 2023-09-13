"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { COLORS, SIZES } from "../themes/vars";

interface MenuItem {
  path: string;
  name: string;
}

const menu: MenuItem[] = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Acerca de mi",
    path: "/about",
  },
];

export const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{ height: SIZES.headerHeight }}
      className={`flex z-50 justify-center px-4 md:px-0 py-4 w-full fixed ease-in duration-300 ${
        scrolling ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="container flex justify-between items-center">
        <figure className="w-3/12">
          <Link href="/">
            <Image
              alt="Logo AUCO"
              src="/images/logo.png"
              width={150}
              height={80}
            />
          </Link>
        </figure>
        <nav>
          <ul className="flex gap-4">
            {menu.map(({ name, path }) => (
              <li
                key={path}
                className="hover:text-slate-400 ease-in duration-300"
              >
                <Link
                  href={path}
                  style={{
                    color: pathName === path ? COLORS.blue : COLORS.textColor,
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
