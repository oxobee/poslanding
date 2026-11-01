import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { CoreAdvantages } from "@/components/site/CoreAdvantages";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { WhatsAppBanner } from "@/components/site/WhatsAppBanner";
import { PricingSection } from "@/components/site/PricingSection";
import { FaqSection } from "@/components/site/FaqSection";
import { BottomCta } from "@/components/site/BottomCta";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreAdvantages />
        <ProcessSteps />
        <WhatsAppBanner />
        <PricingSection />
        <FaqSection />
        <BottomCta
          title="Restoran operasyonunuzu bugün sadeleştirin."
          subtitle="24 saat içinde menünüzü aktaralım ve mutfağınızı operasyona hazır hale getirelim."
          buttonText="Demo Talep Et"
        />
      </main>
      <Footer />
    </>
  );
}
