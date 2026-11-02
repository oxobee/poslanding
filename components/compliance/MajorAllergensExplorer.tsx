"use client";

import React, { useState } from "react";
import {
  Wheat,
  Fish,
  Egg,
  Milk,
  AlertTriangle,
  Search,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
  Flame,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

interface AllergenItem {
  id: number;
  name: string;
  category: "Tahıl & Bakliyat" | "Hayvansal & Deniz" | "Yemiş & Tohum" | "Baharat & Katkı";
  scientific: string;
  commonFoods: string;
  hiddenForms: string;
  customerRisk: string;
  kitchenManagement: string;
}

const ALLERGENS: AllergenItem[] = [
  {
    id: 1,
    name: "Gluten İçeren Tahıllar",
    category: "Tahıl & Bakliyat",
    scientific: "Buğday, çavdar, arpa, yulaf, kavuzlu buğday, kamut ve melezleri",
    commonFoods: "Ekmekler, pideler, pizzalar, makarnalar, börekler, kek ve unlu mamuller.",
    hiddenForms: "Çorbalara kıvam veren un meyaneleri, pane harçları, sos bağlayıcıları, soya sosundaki buğday fermantasyonu, bulyonlar.",
    customerRisk: "Çölyak hastaları ve gluten intoleransı bulunan bireylerde bağışıklık hasarı, şiddetli sindirim krizleri ve anafilaksi.",
    kitchenManagement: "Un tozuması havada dahi bulaşmaya yol açar. Glutensiz siparişler için ayrı hazırlık alanı, steril ekipman ve ayrılmış fritöz şarttır.",
  },
  {
    id: 2,
    name: "Kabuklular",
    category: "Hayvansal & Deniz",
    scientific: "Karides, ıstakoz, yengeç, kerevit ve türevleri",
    commonFoods: "Deniz mahsullü makarnalar, tereyağlı karides güveç, suşi çeşitleri, paella.",
    hiddenForms: "Balık bulyonları, Asya tipi balık ve karides ezmeleri (shrimp paste), hazır deniz mahsulleri sosları, salata dressing'leri.",
    customerRisk: "Hızlı gelişen solunum durması, dudak/boğaz şişmesi ve ölümcül anafilaktik şok riski en yüksek gruptur.",
    kitchenManagement: "Kabukluların pişirildiği su, tava, ızgara veya yağ kesinlikle diğer ürünlerde kullanılmamalıdır.",
  },
  {
    id: 3,
    name: "Yumurta ve Ürünleri",
    category: "Hayvansal & Deniz",
    scientific: "Tavuk ve diğer kümes hayvanı yumurtaları, albümin, lizozim",
    commonFoods: "Kahvaltı tabakları, omletler, menemen, kekler, sufleler, krem karamel.",
    hiddenForms: "Mayonez, Sezar sos, hollandez sos, köfte ve şinitzel panelerinde yapıştırıcı katman, tatlı ve hamurların parlaklığı için yumurta sarısı fırçalaması.",
    customerRisk: "Özellikle çocuklarda yaygın olan şiddetli alerjik reaksiyonlar, cilt döküntüleri ve solunum güçlüğü.",
    kitchenManagement: "Fırça, çırpıcı ve mikser uçlarının yıkanması yeterli olmayabilir; yumurta proteini ısıya dayanıklıdır, çapraz temastan kaçınılmalıdır.",
  },
  {
    id: 4,
    name: "Balık ve Balık Ürünleri",
    category: "Hayvansal & Deniz",
    scientific: "Tüm tatlı su ve deniz balıkları, balık jelatini",
    commonFoods: "Izgara/tava balıklar, somon fırın, ton balıklı salatalar, balık köftesi.",
    hiddenForms: "Worcestershire sosu (hamsi içerir), Sezar salata sosu, Asya balık sosları, bazı hazır barbekü sosları ve jelatinli tatlılar.",
    customerRisk: "Mikrogram düzeyinde dahi temas edildiğinde solunum yollarında daralma ve baygınlık yaratabilir.",
    kitchenManagement: "Balık pişirilen ızgara ve fritöz yağı sebze veya kırmızı etler için ASLA ortak kullanılmamalıdır.",
  },
  {
    id: 5,
    name: "Yer Fıstığı ve Ürünleri",
    category: "Yemiş & Tohum",
    scientific: "Arachis hypogaea ve türevleri",
    commonFoods: "Yer fıstığı ezmesi, fıstıklı tatlılar, kurabiyeler, enerji barları.",
    hiddenForms: "Satay sosları, bazı wok yemekleri, çikolatalı soslar, kıvam verici karışımlar ve ucuz bitkisel yağ harmanları.",
    customerRisk: "Dünyada gıda kaynaklı anafilaksi ölümlerinin en başında yer fıstığı yer alır; havadan solumak dahi tetikleyebilir.",
    kitchenManagement: "Yer fıstığı kullanılan bıçak, blender veya kaşıklar izole tutulmalı, tezgaha bulaşma engellenmelidir.",
  },
  {
    id: 6,
    name: "Soya Fasulyesi ve Ürünleri",
    category: "Tahıl & Bakliyat",
    scientific: "Glycine max, soya lesitini, soya proteini",
    commonFoods: "Soya sosu, edamame, tofu, soya sütü, vejetaryen burger köfteleri.",
    hiddenForms: "Endüstriyel ekmeklerde emülgatör (E322), hazır köfte harçları, şarküteri ürünleri (salam/sosis hacim artırıcı), çikolata ve margarinler.",
    customerRisk: "Ağızda karıncalanma, kurdeşen, sindirim krampları ve solunum tıkanıklığı.",
    kitchenManagement: "Hazır satın alınan tüm marinasyon soslarının ve bulyonların etiket içeriğinde soya lesitini taranmalıdır.",
  },
  {
    id: 7,
    name: "Süt ve Süt Ürünleri (Laktoz Dahil)",
    category: "Hayvansal & Deniz",
    scientific: "İnek, koyun, keçi sütü; kazein, peynir altı suyu tozu, laktoz",
    commonFoods: "Peynirler, tereyağı, krema, yoğurt, sütlü tatlılar, latte ve kahve çeşitleri.",
    hiddenForms: "Makarna kremaları, püreler, hamburger ekmekleri, hazır köfte harçları, kızartma paneleri, aromalı cips ve krakerler.",
    customerRisk: "Süt proteini alerjisi (kazein/whey) anafilaksiye sebep olabilir; laktoz intoleransı ise şiddetli mide-bağırsak reaksiyonlarına yol açar.",
    kitchenManagement: "Vegan olarak satılan ürünlerde süt türevi bulaşmadığından emin olunmalı; buhar çubukları her kahveden sonra sterilize edilmelidir.",
  },
  {
    id: 8,
    name: "Sert Kabuklu Meyveler (Ağaç Yemişleri)",
    category: "Yemiş & Tohum",
    scientific: "Badem, fındık, ceviz, kaju, pikan cevizi, brezilya cevizi, antep fıstığı, makademya",
    commonFoods: "Baklava ve şerbetli tatlılar, pastalar, pestolu makarnalar, granola, salata üzeri yemişler.",
    hiddenForms: "Pesto sos (geleneksel olarak çam fıstığı veya ceviz içerir), köfte içi dolguları, salata sosları, bitkisel sütler ve unlar.",
    customerRisk: "Çok küçük kırıntılar dahi solunum yolunu kapatabilir; şiddetli alerjik şok riski barındırır.",
    kitchenManagement: "Tatlı tezgâhı ile sıcak mutfak hazırlık alanı ayrılmalı, kuruyemiş doğranan tahtalar kırmızı et veya salata hazırlığında kullanılmamalıdır.",
  },
  {
    id: 9,
    name: "Kereviz ve Kereviz Ürünleri",
    category: "Baharat & Katkı",
    scientific: "Apium graveolens; kereviz sapı, kökü, yaprağı, tohumu",
    commonFoods: "Zeytinyağlı kereviz yemekleri, sebze çorbaları, Waldorf salatası.",
    hiddenForms: "Et ve tavuk bulyonları, hazır baharat harçları, sebze çeşnileri, körili karışımlar, Bloody Mary kokteylleri.",
    customerRisk: "Avrupa ve Türkiye'de en yaygın gizli alerjenlerden biridir; deride şişme ve dolaşım şokuna yol açabilir.",
    kitchenManagement: "Tencere yemeklerinde ve çorba stoklarında kullanılan kök sebzelerin püre haline getirilmesi durumunda menüde açıkça yazılmalıdır.",
  },
  {
    id: 10,
    name: "Hardal ve Hardal Ürünleri",
    category: "Baharat & Katkı",
    scientific: "Sinapis alba, Brassica juncea; hardal tohumu, tozu, yağı",
    commonFoods: "Hardal sosu, ballı hardallı tavuk, sosisli sandviç, şarküteri tabakları.",
    hiddenForms: "Et marinasyonları, burger sosları, mayonezli karışımlar, salata sosu emülgatörleri, hazır turşular.",
    customerRisk: "Çok düşük konsantrasyonlarda dahi dudaklarda kabarma, cilt reaksiyonları ve astım nöbetleri tetikleyebilir.",
    kitchenManagement: "Sos kapları ve servis sıkma şişeleri karışmamalı, hardal içeren marinasyon kapları ayrı yıkanmalıdır.",
  },
  {
    id: 11,
    name: "Susam Tohumu ve Ürünleri",
    category: "Yemiş & Tohum",
    scientific: "Sesamum indicum; susam tanesi, susam yağı, tahin",
    commonFoods: "Simitler, hamburger ekmekleri, tahinli piyaz, humus, Asya usulü susamlı tavuk.",
    hiddenForms: "Tahin helvası, Orta Doğu mezeleri, paneler, Asya yemeklerinde kullanılan lezzet yağı (susam yağı), kraker tabanları.",
    customerRisk: "Son yıllarda alerji vakalarında hızlı artış görülen, sistemik anafilaksiye sebep olabilen majör alerjendir.",
    kitchenManagement: "Ekmek kesme tahtalarındaki susam tanecikleri kolayca diğer ekmeklere yapışır; tezgâh fırçalanmalı ve temiz tutulmalıdır.",
  },
  {
    id: 12,
    name: "Kükürt Dioksit ve Sülfitler",
    category: "Baharat & Katkı",
    scientific: "E220–E228; 10 mg/kg veya 10 mg/L üzerindeki konsantrasyonlar",
    commonFoods: "Kuru kayısı, kuru üzüm, incir gibi kurutulmuş meyveler, şaraplar, biralar, elma sirkeleri.",
    hiddenForms: "Hazır salata barlarındaki taze doğranmış meyve ve sebzelerin kararmasını önleyen koruyucular, hazır soslar, deniz ürünü koruyucuları.",
    customerRisk: "Astım hastalarında ani ve şiddetli bronkospazm (nefes darlığı) krizlerine sebep olur.",
    kitchenManagement: "Kuru meyveli tatlı veya salata reçetelerinde sülfit koruyuculu malzeme kullanılıyorsa menüde belirtilmelidir.",
  },
  {
    id: 13,
    name: "Acı Bakla (Lüpen) ve Ürünleri",
    category: "Tahıl & Bakliyat",
    scientific: "Lupinus albus; lüpen unu, tohumu, proteini",
    commonFoods: "Bazı fırıncılık ürünleri, Akdeniz tipi aperitifler, vejetaryen protein barları.",
    hiddenForms: "Glutensiz ekmek ve kek karışımlarında buğday ununun yerine hacim ve renk vermesi amacıyla eklenen lüpen unu, hazır makarnalar.",
    customerRisk: "Yer fıstığı alerjisi olan bireylerde yüksek oranda çapraz reaktivite gösterir; solunum ve sindirim krizleri oluşturur.",
    kitchenManagement: "Glutensiz hazır un karışımlarının etiketleri dikkatle okunmalı, lüpen proteini içerip içermediği kontrol edilmelidir.",
  },
  {
    id: 14,
    name: "Yumuşakçalar ve Ürünleri",
    category: "Hayvansal & Deniz",
    scientific: "Midye, kalamar, ahtapot, istiridye, salyangoz, mürekkep balığı",
    commonFoods: "Midye tava, midye dolma, kalamar tava, ahtapot salatası, deniz mahsullü risotto.",
    hiddenForms: "Mürekkep balıklı siyah makarna ve ekmekler, hazır istiridye sosu (oyster sauce), Asya tipi çorba bazları.",
    customerRisk: "Ciddi anafilaksi, ürtiker ve tansiyon düşüşü ile seyreden acil tıbbi müdahale gerektiren şok tabloları.",
    kitchenManagement: "Kalamar ve midye kızartılan yağlar kesinlikle patates kızartması ya da tavuk için kullanılmamalıdır.",
  },
];

export function MajorAllergensExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>("Tümü");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedAllergen, setSelectedAllergen] = useState<AllergenItem | null>(ALLERGENS[0]);

  const categories = ["Tümü", "Tahıl & Bakliyat", "Hayvansal & Deniz", "Yemiş & Tohum", "Baharat & Katkı"];

  const filteredAllergens = ALLERGENS.filter((item) => {
    const matchesCategory = activeCategory === "Tümü" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.commonFoods.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hiddenForms.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="14-alerjen" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#EA004B] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            Bölüm 5 · 14 Majör Alerjen Rehberi
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Mevzuatta Belirtilen 14 Majör Alerjen ve Restoran Yönetimi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Türk Gıda Kodeksi kapsamında menülerde bildirilmesi yasal zorunluluk olan 14 gıda alerjeni, 
            restoran mutfaklarında karşılaşılan gizli formları ve çapraz bulaşma riskleri.
          </p>
        </div>

        {/* Vital Warning Callout: Çapraz Bulaşma & "Alerjensiz" İfadesi */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-rose-200 shadow-sm mb-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#EA004B] flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1.5">
                Kritik Kural: Çapraz Bulaşma ve Kesin Güvence Sınırı
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Aynı fritöz yağında hem kalamar hem patates kızartmak, ortak kesme tahtasını unlu ekmekten sonra sebze için kullanmak veya aynı maşayla servis yapmak alerjen proteinlerini doğrudan transfer eder. 
                <strong className="text-slate-900 font-bold ml-1">
                  Laboratuvar analiziyle ve steril üretim hattıyla doğrulanmamış hiçbir ürün &quot;Alerjensiz&quot; veya &quot;Kesinlikle Güvenli&quot; olarak menüye yazılamaz.
                </strong> Menülerde &quot;Alerjen içermez&quot; yerine &quot;Bileşenlerinde X bulunmaz (çapraz temas riski olabilir)&quot; şeffaf dili tercih edilmelidir.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#EA004B] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Alerjen veya gıda ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#EA004B]"
            />
          </div>
        </div>

        {/* Grid of 14 Allergens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filteredAllergens.map((item) => {
            const isSelected = selectedAllergen?.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedAllergen(item)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                  isSelected
                    ? "bg-white border-[#EA004B] shadow-md ring-2 ring-[#EA004B]/20"
                    : "bg-white hover:bg-slate-50/80 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                    #{item.id} · {item.category}
                  </span>
                  {isSelected && (
                    <span className="text-[10px] font-bold text-[#EA004B] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Seçildi
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-black text-slate-900 mb-1">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                  {item.commonFoods}
                </p>
                <div className="text-[11px] font-semibold text-[#EA004B] flex items-center gap-1">
                  <span>Detaylı mutfak analizi</span> →
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Allergen Detailed Inspection Card */}
        {selectedAllergen && (
          <motion.div
            key={selectedAllergen.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-8 rounded-3xl bg-[#12111A] text-white border border-white/10 shadow-2xl text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
              <div>
                <span className="text-[11px] font-black tracking-wider uppercase text-[#FF457E]">
                  Alerjen #{selectedAllergen.id} · {selectedAllergen.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {selectedAllergen.name}
                </h3>
                <p className="text-xs text-slate-400 italic mt-0.5">
                  Mevzuat Tanımı: {selectedAllergen.scientific}
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA004B]/20 text-[#FF457E] border border-[#EA004B]/30 text-xs font-bold self-start sm:self-auto">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Yasal Bildirim Zorunlu</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <h5 className="font-bold text-rose-300 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-[#EA004B]" />
                  Restoran Menülerindeki Gizli Formlar
                </h5>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {selectedAllergen.hiddenForms}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <h5 className="font-bold text-amber-300 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Müşteri Açısından Taşıdığı Risk
                </h5>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {selectedAllergen.customerRisk}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#EA004B]/15 border border-[#EA004B]/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FF457E] flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                  OxonomPOS ile Doğru Yönetim Yöntemi:
                </h5>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedAllergen.kitchenManagement} OxonomPOS menü panelinde bu ürünün içerik kartına #{selectedAllergen.id} alerjen rozetini eklediğinizde, masadaki QR menüde otomatik uyarı ikonu belirir ve sipariş verildiğinde mutfak ekranına (KDS) renkli alerjen uyarısı düşer.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
