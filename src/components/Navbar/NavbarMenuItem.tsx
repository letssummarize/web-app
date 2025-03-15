import { getIconComponent, IconName } from "@/util/getIconComponent";
import Link from "next/link";

export interface NavbarMenuItemProps {
    name: string;
    href: string;
    icon?: IconName;
}

function NavbarMenuItem({ name, href, icon }: NavbarMenuItemProps) {
    return (
        <li className="flex items-center cursor-pointer">
            <Link href={href} className="flex items-center space-x-2">
                {icon && (getIconComponent({ icon, props: { className: 'w-5 h-auto opacity-80' } }))}
                <span className="text-sm font-light capitalize">{name}</span>
            </Link>
        </li>
    )
}

export default NavbarMenuItem;