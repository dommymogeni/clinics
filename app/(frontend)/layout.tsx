import Footer from "@/components/Frontend/footer";
import Header from "@/components/Frontend/header";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
