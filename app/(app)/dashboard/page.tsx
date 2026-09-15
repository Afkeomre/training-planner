import Title from '@/components/ui/Title';

export default function DashboardPage() {
  return (
    <>
      <header className="text-left self-start">
        <p className="text-xs text-gray-2 mb-2">С возвращением, </p>
        <Title className="text-xl">Ирина Воронкова</Title>
      </header>
      <section className="min-h-[1000px]">
        Контент, который мы обсуждали
      </section>
    </>
  );
}
