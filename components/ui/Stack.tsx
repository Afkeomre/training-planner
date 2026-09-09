type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Stack({ className = '', children }: Props) {
  return (
    <div className={`flex flex-col items-center ${className}`}>{children}</div>
  );
}
