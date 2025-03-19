import Link from 'next/link';
import Icon from '../Icon/Icon';
import { IconName } from '../Icon/types/Icon';

export interface NavbarMenuItemProps {
  name: string;
  href: string;
  icon?: IconName;
  onClick?: ()=> void;

}

function NavbarMenuItem({ name, href, icon, onClick }: NavbarMenuItemProps) {
  return (
    <li className='flex items-center cursor-pointer' onClick={onClick}>
      <Link href={href} className='flex items-center space-x-2' onClick={onClick}>
        {icon && (
          <Icon icon={icon} props={{ className: 'w-5 h-auto opacity-80' }} />
        )}
        <span className='text-sm font-light capitalize'>{name}</span>
      </Link>
    </li>
  );
}

export default NavbarMenuItem;
