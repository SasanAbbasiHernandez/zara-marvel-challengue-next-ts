import { Header } from '@/components/header/Header';

export default function ViewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />

      <div>{children}</div>
    </div>
  );
}
