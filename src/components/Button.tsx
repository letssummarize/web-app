import Icon from "./Icon/Icon";
import { IconName } from "./Icon/types/icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  label: string;
  variant?: 'default' | 'gradient' | 'ghost';
  radius?: 'default' | 'full';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({
  icon,
  label,
  variant = 'default',
  radius = 'default',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  const classes = [
    "cursor-pointer flex items-center gap-2",
    variant === 'gradient' && "bg-gradient-to-r from-[#3e15ba] via-[#a02b66] to-[#d8775f] text-white",
    variant === 'ghost' && "bg-transparent border-0 text-white",
    variant !== 'ghost' && (radius === 'full' ? "rounded-full" : "rounded-[5px]"),
    variant !== 'ghost' && {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-7 py-3.5 text-lg"
    }[size],
    className
  ].filter(Boolean).join(' ');

  const iconSize = size === 'lg' ? 'w-5' : size === 'md' ? 'w-4' : 'w-4';

  return (
    <button {...props} className={classes}>
      {icon && <Icon icon={icon} props={{ className: `${iconSize} h-auto ${variant === 'ghost' ? 'fill-current' : 'fill-white'}` }} />}
      {label}
    </button>
  );
};

export default Button;