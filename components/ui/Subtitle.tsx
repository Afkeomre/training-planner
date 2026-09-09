type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Subtitle({ className = 'text-sm', children }: Props) {
  return <p className={`text-gray-1 text-center ${className}`}>{children}</p>;
}
