import AboutBaida from "@/components/home/AboutBaida";
import BestSellers from "@/components/home/BestSeller";
import Hero from "@/components/home/Hero";
import TopCategories from "@/components/home/TopCategories";

export default function Home() {
  return (
    <main className="bg-cream">
      <Hero />
      <BestSellers/>
      {/* <TopCategories/> */}
      <AboutBaida/>
    </main>
  );
}
