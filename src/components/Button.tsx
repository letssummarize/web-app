import Icon from './Icon/Icon';
import { IconName } from './Icon/types/Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'ghost' | 'outlined';
  radius?: 'default' | 'full';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({
  icon,
  children,
  variant = 'default',
  radius = 'default',
  size = 'md',
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const classes = [
    'inline-flex items-center justify-center gap-2',
    'font-medium transition-colors duration-200 cursor-pointer',
    variant === 'default' && 'bg-gray-200 hover:bg-gray-300 text-black',
    variant === 'gradient' &&
    'bg-gradient-to-r from-[#D8775F] via-[#A02B66] to-[#3E15BA] text-white',
    variant === 'ghost' && 'bg-transparent hover:bg-gray-700/10',
    variant === 'outlined' &&
    'border border-gray-700/50 hover:border-gray-700/70 hover:bg-gray-700/10',
    radius === 'default' && 'rounded-lg',
    radius === 'full' && 'rounded-full',
    size === 'sm' && 'px-3 py-1.5 text-sm',
    size === 'md' && 'px-4 py-2',
    size === 'lg' && 'px-6 py-3 text-lg',
    disabled && 'opacity-50 cursor-not-allowed',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} {...props}>
      {icon && (
        <Icon
          icon={icon}
          props={{
            className: 'h-4 w-4 fill-white',
          }}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
