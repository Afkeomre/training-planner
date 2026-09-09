type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      className="relative flex justify-center items-center rounded-[99px] bg-brand-gradient btn-shadow text-white font-bold h-[60px] max-w-xs w-full px-8 py-4 cursor-pointer transition-all duration-500 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-2 disabled:cursor-not-allowed disabled:opacity-60"
      type="button"
    >
      <span className="relative z-10">{children}</span>
      <span className="hover-layer" aria-hidden="true"></span>
    </button>
  );
}
