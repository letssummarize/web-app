interface TextProps {
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}

function Text({ children, className, center }: TextProps) {
  return (
    <p
      className={`text-base font-light ${
        center ? 'text-center' : ''
      } ${className || 'max-md:text-[20px] max-sm:text-[12px]'}`}
    >
      {children}
    </p>
  );
}

export default Text;
