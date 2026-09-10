import Stack from '@/components/ui/Stack';
import Title from './Title';

type Props = {
  eyebrow: string;
  children: React.ReactNode;
};

export default function TitleGroup({ eyebrow, children }: Props) {
  return (
    <Stack className="gap-1">
      <p className="text-black-1 lg:text-lg">{eyebrow}</p>
      <Title className="text-xl lg:text-3xl">{children}</Title>
    </Stack>
  );
}
