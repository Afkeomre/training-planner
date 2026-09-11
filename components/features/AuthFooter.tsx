import Link from 'next/link';

type Props = {
  content: string;
  link: string;
  path: string;
};

export default function AuthFooter({ content, link, path }: Props) {
  return (
    <footer className="text-black-1 text-sm text-center">
      <p>
        {content}{' '}
        <Link
          className="font-medium rounded-sm text-secondary-1 hover:underline hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-1 focus-visible:ring-offset-2 active:text-secondary-2 transition-colors"
          href={path}
        >
          {link}
        </Link>
      </p>
    </footer>
  );
}
