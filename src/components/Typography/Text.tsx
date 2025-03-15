interface TextProps {
    children: React.ReactNode;
    className?: string;
    center?: boolean;
}

function Text({ children, className, center }: TextProps) {
    return (
        <p className={`text-base font-light ${center ? 'text-center' : 'text-start'} ${className || ''}`}>
            {children}
        </p>
    );
}

export default Text;
