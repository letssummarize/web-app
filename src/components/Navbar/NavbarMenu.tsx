import NavbarMenuItem, { NavbarMenuItemProps } from "./NavbarMenuItem";

export interface NavbarMenu {
    items: NavbarMenuItemProps[];
    secondary?: boolean;
}

function NavbarMenu({ items, secondary = false }: NavbarMenu) {
    return (
        <ul className={`hidden md:flex items-center ${secondary ? 'space-x-8' : 'space-x-10'} text-base`}>
            {items.map((item, index) => (
                <NavbarMenuItem
                    key={index}
                    name={item.name}
                    href={item.href}
                    icon={item.icon}
                />
            ))}
        </ul>
    )
}

export default NavbarMenu;