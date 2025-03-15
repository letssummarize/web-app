import { navbarData } from "@/data/navbar";
import Container from "../Container";
import Logo from "../Logo";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  return (
    <nav className="py-8">
      <Container classNames="flex justify-between items-center" wide>
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <Logo {...navbarData.logo} />

          {/* Primary Menu */}
          <NavbarMenu items={navbarData.menu} />
        </div>

        {/* Secondary Menu */}
        <NavbarMenu items={navbarData.secondaryMenu} />
      </Container>
    </nav>
  );
};

export default Navbar;
