import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AudienceCards from "@/components/home/AudienceCards";
import BrandsSection from "@/components/home/BrandsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TrustBar from "@/components/home/TrustBar";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <AudienceCards />
        <BrandsSection />
        <HowItWorksSection />
        <TrustBar />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
