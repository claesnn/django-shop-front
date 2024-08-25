type CardProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={`flex flex-col gap-6 bg-white border rounded-md p-4 w-full ${className}`}
    >
      {children}
    </div>
  );
}
