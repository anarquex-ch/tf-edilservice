import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import TrustSection from "@/components/TrustSection";
import ReviewSection from "@/components/ReviewSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection
        title="I Nostri Servizi"
        subtitle="Un'ampia gamma di servizi professionali per soddisfare ogni tua esigenza"
      />
      <TrustSection />
      <ReviewSection />
      <CTASection />
    </>
  );
}