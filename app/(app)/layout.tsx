import Container from '@/components/ui/Container';
import MobileNav from '@/components/layout/MobileNav';
import HomeIcon from '@/components/ui/icons/HomeIcon';
import CalendarIcon from '@/components/ui/icons/CalendarIcon';
import StatsIcon from '@/components/ui/icons/StatsIcon';
import HomeIconActive from '@/components/ui/icons/HomeIconActive';
import CalendarIconActive from '@/components/ui/icons/CalendarIconActive';
import StatsIconActive from '@/components/ui/icons/StatsIconActive';
import DesktopNav from '@/components/layout/DesktopNav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    {
      href: '/dashboard',
      label: 'Дашборд',
      icon: <HomeIcon />,
      activeIcon: <HomeIconActive />,
    },
    {
      href: '/calendar',
      label: 'Календарь',
      icon: <CalendarIcon />,
      activeIcon: <CalendarIconActive />,
    },
    {
      href: '/stats',
      label: 'Статистика',
      icon: <StatsIcon />,
      activeIcon: <StatsIconActive />,
    },
  ];

  return (
    <>
      <DesktopNav navItems={navItems} />
      <main className="flex-1 flex flex-col pt-0 md:pt-22 pb-28 md:pb-0">
        <Container>{children}</Container>
      </main>
      <MobileNav navItems={navItems} />
    </>
  );
}
