interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`max-w-[1600px] mx-auto w-full px-16 max-[1280px]:px-12 max-[900px]:px-6 max-[640px]:px-4 ${className}`}
    >
      {children}
    </div>
  );
}
