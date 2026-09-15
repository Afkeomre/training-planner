'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/types/nav';
import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';

type Props = {
  navItems: NavItem[];
};

export default function DesktopNav({ navItems }: Props) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 h-22 shadow-nav hidden md:flex justify-center items-center bg-white z-10">
      <Container>
        <div className="flex items-center justify-between w-full">
          <Logo />
          <nav aria-label="Основная навигация">
            <ul className="flex gap-12">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const base =
                  'inline-block relative text-center px-2 py-2 text-base font-medium rounded-md transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-2 active:scale-95 active:duration-100';

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={
                        isActive
                          ? `${base} text-brand-1`
                          : `${base} text-gray-1 hover:text-brand-1`
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
