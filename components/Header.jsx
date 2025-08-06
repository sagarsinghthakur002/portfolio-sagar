"use client"
import React from "react";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          
          <Logo />
          <div className="flex items-center gap-x-6" >
            
          <Nav />
          <ThemeToggler />


          {/*mobile nev*/} 
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
