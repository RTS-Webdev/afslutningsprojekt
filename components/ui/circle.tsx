type CircleProps = {
    size: number;
    children: React.ReactNode;
    className?: string;
}

export default function Circle({ size, children, className }: CircleProps) {
    return (
        <div
            style={{ width: size, height: size }}
            className={`rounded-full bg-primary flex items-center justify-center ${className}`}
        >
            {children}
        </div>
    )
}