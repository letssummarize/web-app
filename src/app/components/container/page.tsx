type ContainerProps = {
    children: React.ReactNode;
    classNames?: string;
};

function Container({ children, classNames }: ContainerProps) {
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${classNames || ""}`}>
            {children}
        </div>
    );
}

export default Container;
