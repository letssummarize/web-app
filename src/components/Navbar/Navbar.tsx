"use client";
import { useState } from "react";
import { navbarData } from "@/data/navbar";
import Container from "../Container";
import Logo from "../Logo";
import NavbarMenu from "./NavbarMenu";
import Close from "../Icon/Close";
import Divider from "../Divider";
import Menu from "../Icon/Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="py-8 max-sm:py-4 relative">
      <Container classNames="flex justify-between items-center max-md:gap-2 " wide>
        <div className="flex items-center space-x-12">
          <Logo {...navbarData.logo} />
            <NavbarMenu items={navbarData.menu} classNames="hidden min-lg:flex"/>
        </div>

          <NavbarMenu items={navbarData.secondaryMenu} classNames="hidden min-lg:flex" />

        {/* Mobile Menu Icon */}
        <button
  className="min-lg:hidden z-50 p-2 rounded-md transition-all duration-200 bg-transparent hover:bg-gray-700"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? (
    <Close className="w-6 h-6 text-gray-200" />
  ) : (
    <Menu className="w-6 h-6 text-gray-200" />
  )}
</button>

      </Container>

      {menuOpen && (
  <div className="lg:hidden fixed top-0 left-0 max-w-[300px] h-full bg-black shadow-2xl p-6 flex flex-col space-y-6 z-50 transition-all duration-300">
    <button className="bg-black text-white py-3 px-4 rounded-lg w-full">
      <Logo {...navbarData.logo} classNames="flex justify-center" />
    </button>

    <div className="flex flex-col h-full items-center gap-6">
      <NavbarMenu
        items={navbarData.menu}
        classNames="text-lg text-white flex flex-col items-start space-y-4 w-full"
        onClick={closeMenu}
      />

      <Divider/>
      <NavbarMenu
        items={navbarData.secondaryMenu}
        classNames="text-lg text-white flex flex-col items-start space-y-4 w-full"
        onClick={closeMenu}
      />
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
