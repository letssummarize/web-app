interface DividerProps {
  className?: string;
}

function Divider({
  className = '',
}: DividerProps) {
  const dividerClasses = `
    h-[1px] w-full
    border-t
    ${className}
  `.trim();

  return (
    <div className={dividerClasses} role="separator" />
  );
}

export default Divider;
