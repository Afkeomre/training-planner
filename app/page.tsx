import Stack from '@/components/ui/Stack';
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Title';
import Subtitle from '@/components/ui/Subtitle';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Stack className="gap-10">
        <Image
          src="/images/running-man.svg"
          alt="Бегущий человек"
          width={264}
          height={229}
        />
        <Stack className="justify-center gap-2">
          <Title className="text-4xl text-center">Дневник тренировок</Title>
          <Subtitle className="text-lg">
            Грамотное планирование – залог прогресса
          </Subtitle>
        </Stack>
      </Stack>
      <Button href="/register">Начать</Button>
    </>
  );
}
