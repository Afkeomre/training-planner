import Container from '@/components/ui/Container';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 flex flex-col">
      <Container>{children}</Container>
    </main>
  );
}
