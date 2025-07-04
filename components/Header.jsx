"use client"
import React from "react";
import Image from "next/image";

import Logo from "./Logo"; // Adjust the path as necessary
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <div>
          <Nav />
          <ThemeToggler />


          {/*mobile nev*/} 
          <div>
            <MobileNav />
          </div>

          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
