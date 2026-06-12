import AboutHero from "@/components/about/AboutHero";
import OurProcess from "@/components/about/OurProcess";
import AboutBaida from "@/components/home/AboutBaida";
import WhyChooseBaida from "@/components/home/WhyChooseBaida";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-cream">

            <AboutHero />
            <AboutBaida />
            <WhyChooseBaida />
            <OurProcess />
        </main>
    );
}