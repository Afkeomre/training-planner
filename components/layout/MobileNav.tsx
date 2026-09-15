'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/types/nav';

type Props = {
  navItems: NavItem[];
};

export default function MobileNav({ navItems }: Props) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Основная навигация"
      className="fixed bottom-0 left-0 right-0 h-28 shadow-nav p-7 flex justify-center items-center md:hidden bg-white z-10"
    >
      <ul className="flex gap-2 w-full justify-between items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
                className="inline-flex items-center justify-center p-2 rounded-full transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-2 active:scale-95 active:duration-100"
              >
                <span aria-hidden="true">
                  {isActive ? item.activeIcon : item.icon}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
