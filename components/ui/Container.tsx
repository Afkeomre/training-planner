type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="px-8 py-10 max-w-screen-lg mx-auto flex-1 flex flex-col items-center justify-between gap-4">
      {children}
    </div>
  );
}
