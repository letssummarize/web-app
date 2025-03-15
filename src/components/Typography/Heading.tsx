import React from 'react';

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
    center?: boolean;
    level: 'h1' | 'h2' | 'h3';
}

function Heading({ children, className, center, level }: HeadingProps) {
    const Component = level;
    const fontSize = level === 'h1' ? 'text-[36px]' : level === 'h2' ? 'text-[20px]' : 'text-[18px]';
    const fontWeight = level === 'h1' ? 'font-semibold' : level === 'h2' ? 'font-medium' : 'font-medium';

    return (
        <Component className={`${fontWeight} ${fontSize} ${center ? 'text-center' : 'text-start'} ${className || ''}`}>
            {children}
        </Component>
    );
}

export default Heading;