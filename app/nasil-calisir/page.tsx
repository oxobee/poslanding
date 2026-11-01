import { Navbar } from "@/components/site/Navbar";
import { InteractiveWorkflow } from "@/components/site/InteractiveWorkflow";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { BottomCta } from "@/components/site/BottomCta";
import { Footer } from "@/components/site/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nasıl Çalışır? — oxonom pos",
  description: "Masadan kasaya senkronize restoran deneyimi. 5 koordineli adımda sürtünmesiz sipariş ve mutfak akışı.",
};

export default function NasilCalisirPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <InteractiveWorkflow />
        <ProcessSteps />
        <BottomCta
          title="Bu akışı kendi işletmenize kurmak çok kolay."
          subtitle="Mevcut menünüzü aktaralım, masalarınızın QR kodlarını hazırlayalım. 24 saatte canlıya geçin."
          buttonText="Demo Talep Et"
        />
      </main>
      <Footer />
    </>
  );
}
