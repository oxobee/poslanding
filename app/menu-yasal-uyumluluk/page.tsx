import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BottomCta } from "@/components/site/BottomCta";
import { ComplianceHero } from "@/components/compliance/ComplianceHero";
import { ComplianceNavigation } from "@/components/compliance/ComplianceNavigation";
import { ComplianceTimeline } from "@/components/compliance/ComplianceTimeline";
import { MajorAllergensExplorer } from "@/components/compliance/MajorAllergensExplorer";
import { AiDishAnalysisWidget } from "@/components/compliance/AiDishAnalysisWidget";
import { NutritionAndLabelsSection } from "@/components/compliance/NutritionAndLabelsSection";
import { ComplianceCoreTopics } from "@/components/compliance/ComplianceCoreTopics";
import { ComplianceFaq } from "@/components/compliance/ComplianceFaq";
import { ComplianceDisclaimer } from "@/components/compliance/ComplianceDisclaimer";

export const metadata: Metadata = {
  title: "Menü Yasal Uyumluluk ve Şeffaflık Yasası Rehberi — oxonom pos",
  description:
    "Restoran, kafe ve toplu tüketim yerleri için menü şeffaflık mevzuatı, 14 majör alerjen bildirimi, porsiyon enerji (kcal & kJ) hesaplama ve 2026-2027 resmi uygulama takvimi rehberi.",
  keywords: [
    "menü yasal uyumluluk",
    "menü şeffaflık yasası",
    "14 majör alerjen",
    "menüde kalori bildirimi",
    "kcal kj menü zorunluluğu",
    "restoran gıda etiketleme",
    "toplu tüketim gıda mevzuatı",
    "oxonom pos qr menü",
  ],
};

export default function MenuYasalUyumlulukPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Section 0: Hero & Banner Card Match */}
        <ComplianceHero />

        {/* Sticky Table of Contents Quick-Nav */}
        <ComplianceNavigation />

        {/* Section 1, 3, 7, 8, 10, 11, 12 Core Topics */}
        <ComplianceCoreTopics />

        {/* Section 2: Yasal Yükümlülükler ve 2026-2027 Uygulama Takvimi */}
        <ComplianceTimeline />

        {/* Section 4 & 6: Enerji (kcal/kJ) Bildirimi & Diyet Etiketleri (Vegan != Alerjensiz) */}
        <NutritionAndLabelsSection />

        {/* Section 5: 14 Majör Alerjen & Çapraz Bulaşma Rehberi */}
        <MajorAllergensExplorer />

        {/* Section 9: AI ile Reçete ve Alerjen Analizi (Tavuklu Kremalı Makarna Örneği) */}
        <AiDishAnalysisWidget />

        {/* Section 13: Sıkça Sorulan Sorular (16 Soru ve Kapsamlı Cevaplar) */}
        <ComplianceFaq />

        {/* Section 14: İçerik Sonu Bilgilendirme Notu & Yasal Sorumluluk Beyanı */}
        <ComplianceDisclaimer />

        {/* Bottom CTA */}
        <BottomCta
          title="Menünüzü 2026–2027 Menü Şeffaflık Yasasına Hazırlayın"
          subtitle="OxonomPOS ile ürün bileşenlerini, 14 alerjen rozetini ve enerji değerlerini tek merkezden kolayca yönetin."
          buttonText="Hemen Demo ve Başvuru Yapın"
        />
      </main>
      <Footer />
    </>
  );
}
