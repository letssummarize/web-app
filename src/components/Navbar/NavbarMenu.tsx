import NavbarMenuItem, { NavbarMenuItemProps } from "./NavbarMenuItem";

export interface NavbarMenu {
  items: NavbarMenuItemProps[];
  secondary?: boolean;
  classNames?: string;
  onClick?: () => void;
}

function NavbarMenu({
  items,
  classNames,
  onClick,
  secondary = false,
}: NavbarMenu) {
  return (
    <ul
      className={`hidden md:flex items-center ${
        secondary ? "space-x-8" : "space-x-10"
      } text-base ${classNames}`}
    >
      {items.map((item, index) => (
        <NavbarMenuItem key={index} {...item} onClick={onClick}/>
      ))}
    </ul>
  );
}

export default NavbarMenu;
