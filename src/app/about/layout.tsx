import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <div className="min-h-screen bg-[#050505] pt-16 md:pt-[4.25rem]">{children}</div>
    </>
  );
}
