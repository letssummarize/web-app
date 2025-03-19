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
      <Container classNames="flex justify-between items-center " wide>
        <div className="flex items-center space-x-12">
          <Logo {...navbarData.logo} />
            <NavbarMenu items={navbarData.menu} classNames="hidden md:flex"/>
        </div>

          <NavbarMenu items={navbarData.secondaryMenu} classNames="hidden md:flex" />

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden z-50"
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
        <div className="md:hidden fixed max-w-[300px] h-auto top-0 left-0 bg-black shadow-lg p-6 flex flex-col space-y-4 z-50">
          <button className="bg-black text-white py-2 px-4 rounded-lg w-full">
            <Logo {...navbarData.logo} classNames="flex justify-center" />
          </button>

          <div className="flex flex-col h-screen items-center gap-4">
            <NavbarMenu
              items={navbarData.menu}
              classNames="text-lg space-y-4 text-white flex flex-col items-start"
              onClick={closeMenu}
            />
            <Divider/>
            <NavbarMenu
              items={navbarData.secondaryMenu}
              classNames="text-lg space-y-4 text-white flex flex-col items-start"
              onClick={closeMenu}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
