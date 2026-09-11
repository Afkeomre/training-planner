import Link from 'next/link';

type Props = {
  className?: string;
  children: React.ReactNode;
  href?: string;
  type?: 'submit' | 'button';
};

const styles =
  'relative flex justify-center items-center rounded-[99px] bg-(image:--gradient-brand) shadow-btn text-white font-bold h-[60px] max-w-xs w-full px-8 py-4 cursor-pointer transition-all duration-500 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-2 disabled:cursor-not-allowed disabled:opacity-60';

export default function Button({
  children,
  href,
  type = 'button',
  className = '',
}: Props) {
  if (href) {
    return (
      <Link href={href} className={`${styles} ${className}`}>
        <span className="relative z-10">{children}</span>
        <span className="hover-layer" aria-hidden="true"></span>
      </Link>
    );
  }

  return (
    <button type={type} className={`${styles} ${className}`}>
      <span className="relative z-10 flex gap-2 items-center">{children}</span>
      <span className="hover-layer" aria-hidden="true"></span>
    </button>
  );
}
