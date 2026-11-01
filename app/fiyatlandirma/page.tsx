import { Navbar } from "@/components/site/Navbar";
import { PricingSection } from "@/components/site/PricingSection";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { FaqSection } from "@/components/site/FaqSection";
import { BottomCta } from "@/components/site/BottomCta";
import { Footer } from "@/components/site/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiyatlandırma & Paketler — oxonom pos",
  description: "Şeffaf paketler, sabit aylık ücret. Yemek satışlarınızdan komisyon yok. Detaylı paket karşılaştırması.",
};

export default function FiyatlandirmaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PricingSection />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <ComparisonTable />
        </div>
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
