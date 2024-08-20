import FluCovid from "@/components/Frontend/flu-covid";
import Footer from "@/components/Frontend/footer";
import Hero from "@/components/Frontend/hero";
import Topspec from "@/components/Frontend/topspec";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Topspec />
      <FluCovid />
      <Footer />
    </main>
  );
}
