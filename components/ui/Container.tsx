type props = {
  children: React.ReactNode;
};

export default function Container({ children }: props) {
  return <div className="px-4 max-w-screen-lg mx-auto">{children}</div>;
}
