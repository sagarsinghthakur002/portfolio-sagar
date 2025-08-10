"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos=window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });}, []);
  return (
    <header className={`${
        header ? "py-0.5 bg-white shadow-lg dark:bg-accent" : "py-0.5 dark:bg-transparent"
      } sticky top-0 z-30 transition-all`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <Logo />
          
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />

            {/* Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;