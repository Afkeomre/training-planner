type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Title({ className = 'text-2xl', children }: Props) {
  return <h1 className={`text-black-1 font-bold ${className}`}>{children}</h1>;
}
