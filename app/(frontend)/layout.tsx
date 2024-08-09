import Header from "@/components/Frontend/header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <Header />
      {children}
    </div>
  );
}
