"use client";

import React from "react";
import {
  FileText,
  Layers,
  QrCode,
  Printer,
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Smartphone,
  PhoneOff,
  Users,
  Check,
  Share2,
  FolderTree,
} from "lucide-react";

export function ComplianceCoreTopics() {
  return (
    <div className="space-y-16 py-12 bg-white">
      {/* 1. Menü Yasal Uyumluluğu Nedir? */}
      <section id="nedir" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-24">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          <FileText className="w-3.5 h-3.5 text-[#EA004B]" />
          Bölüm 1 · Temel Tanım & Kapsam
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          Menü Yasal Uyumluluğu Nedir?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Menü yasal uyumluluğu; restoran, kafe, otel, bar, yemekhane ve tüm toplu tüketim işletmelerinde 
              misafirlere sunulan yiyecek ve içeceklerin bileşenlerinin, 
              <strong className="text-slate-900 font-bold"> 14 majör alerjen maddesinin</strong> ve porsiyon bazındaki 
              <strong className="text-slate-900 font-bold"> enerji (kcal ve kJ) değerlerinin</strong> sipariş verilmeden önce 
              doğru, eksiksiz ve anlaşılır biçimde tüketiciye sunulmasını zorunlu kılan mevzuat bütünüdür.
            </p>
            <p>
              Gıda güvenliği yalnızca mutfakta hijyen sağlamakla sınırlı değildir. 
              Tüketicinin tükettiği besinin içinde ne olduğunu bilme hakkı yasal bir güvencedir. 
              Hatalı veya eksik bilgilendirme, alerjisi olan bireylerde anafilaktik şok gibi hayati riskler yaratırken; 
              işletmeler açısından ise ağır idari para cezaları, itibar kaybı ve faaliyet durdurma yaptırımlarına yol açabilir.
            </p>
            <p>
              <strong className="text-slate-900 font-bold">OxonomPOS</strong>, menüdeki yüzlerce ürünün içeriklerini, 
              reçete bileşenlerini ve beslenme değerlerini bulut tabanlı tek bir merkezden yönetmenizi sağlar. 
              Mutfaktaki bir malzeme değiştiğinde, saniyeler içinde hem masadaki QR menüde hem de kasadaki ekranda güncellenerek 
              işletmenizi daima yasal mevzuata tam uyumlu tutar.
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2">
              Şeffaf Menü Anlayışının 4 Temel Ayağı
            </h4>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-[#EA004B] font-black text-xs flex items-center justify-center flex-shrink-0">1</span>
              <p className="text-xs text-slate-700 leading-snug">
                <strong>Bileşen Açıklığı:</strong> Ürünün yapımında kullanılan tüm ana malzemelerin listelenmesi.
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-[#EA004B] font-black text-xs flex items-center justify-center flex-shrink-0">2</span>
              <p className="text-xs text-slate-700 leading-snug">
                <strong>Alerjen İkazı:</strong> 14 majör alerjenin belirgin ikon ve metinlerle müşteriye gösterilmesi.
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-[#EA004B] font-black text-xs flex items-center justify-center flex-shrink-0">3</span>
              <p className="text-xs text-slate-700 leading-snug">
                <strong>Enerji Değeri:</strong> Porsiyon başına hesaplanmış resmi kcal & kJ gösterimi.
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-[#EA004B] font-black text-xs flex items-center justify-center flex-shrink-0">4</span>
              <p className="text-xs text-slate-700 leading-snug">
                <strong>Erişilebilirlik:</strong> Hem dijital ekrandan hem basılı fiziksel dokümandan ulaşılabilirlik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Menüde Ürün Bileşenlerinin Bildirilmesi */}
      <section id="bilesenler" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-24 pt-8 border-t border-slate-100">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5 text-[#EA004B]" />
          Bölüm 3 · Ürün Bileşenlerinin Sunumu
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          Menüde Ürün Bileşenlerinin Bildirilmesi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Neden Zorunlu ve Önemli?</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Müşteriler sipariş öncesinde yiyeceklerin içeriğini bilmek zorundadır. Sadece &ldquo;Şefin Özel Makarnası&rdquo; yazmak yasal olarak yeterli değildir; içerikteki ana protein, sos içeriği ve peynir çeşidi net olmalıdır.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Karma Reçeteler ve Soslar</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Birden fazla bileşenden oluşan hazır soslar (mayonez, barbekü, pesto vb.) kendi alt bileşenleriyle (yumurta, hardal, kuruyemiş vb.) değerlendirilmeli ve şeffafça ifade edilmelidir.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Tedarikçi & Reçete Değişikliği</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mutfakta tereyağı yerine margarin veya farklı bir un markası kullanılmaya başlandığında menüdeki bileşen bilgisi de derhal güncellenmelidir. OxonomPOS ile bu değişiklik tek tıkla yapılır.
            </p>
          </div>
        </div>
      </section>

      {/* 7 & 8. QR Menü vs. Basılı Alternatif Bildirim Zorunluluğu */}
      <section id="qr-ve-alternatif" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-24 pt-8 border-t border-slate-100">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          <QrCode className="w-3.5 h-3.5 text-[#EA004B]" />
          Bölüm 7 & 8 · Dijital Menü ve Alternatif Bildirim
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          QR Menü Yasal Olarak Yeterli midir? Alternatif Yöntem Zorunluluğu
        </h2>
        
        <div className="p-5 sm:p-6 rounded-3xl bg-amber-50/70 border border-amber-200 mb-8">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm sm:text-base font-black text-amber-950 mb-1">
                Yasal Gerçek: Yalnızca Masaya QR Kod Koymak Bütün Sorumluluğu Karşılamaz!
              </h3>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                QR menüler ürün bilgilerini güncelleme, kalori ve alerjenleri detaylıca sunma konusunda işletmelere muazzam bir hız sağlar. 
                Ancak resmî mevzuat uyarınca: <strong>akıllı telefonu olmayan, şarjı biten veya dijital menü kullanamayan misafirler için işletmede mutlaka fiziksel alternatif bir bilgilendirme yöntemi de hazır bulundurulmalıdır.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200">
            <div className="flex items-center gap-2.5 mb-3 text-slate-900 font-bold text-base">
              <Smartphone className="w-5 h-5 text-[#EA004B]" />
              <h4>QR Menünün Sağladığı Avantajlar</h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Tek tıkla anında alerjen ve kalori güncellemesi (sıfır baskı maliyeti).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Müşterinin alerjisine göre ürünleri tek dokunuşla filtreleyebilmesi.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Çok dilli menülerde yabancı turistlere anında kendi dilinde alerjen uyarısı.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200">
            <div className="flex items-center gap-2.5 mb-3 text-slate-900 font-bold text-base">
              <PhoneOff className="w-5 h-5 text-amber-600" />
              <h4>Bulunması Zorunlu Alternatif Yöntemler</h4>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Kasada veya garsonlarda hazır bulundurulan güncel basılı A4 içerik listesi.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Masa üstlerinde veya işletme girişinde yer alan alerjen bilgilendirme kartları.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Müşterinin sorusu durumunda reçeteyi açıklayabilecek eğitimli servis personeli.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10 & 11. Basılı Materyaller ve Çok Şubeli Yönetim */}
      <section id="cok-subeli" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-24 pt-8 border-t border-slate-100">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Building2 className="w-3.5 h-3.5 text-[#EA004B]" />
          Bölüm 10 & 11 · Basılı Dokümanlar & Çok Şubeli Yönetim
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          Çok Şubeli İşletmelerde Menü Bilgisi ve Basılı Çıktı Yönetimi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#EA004B]">
              <Printer className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              OxonomPOS&#39;tan Tek Tıkla Basılı Alerjen Tablosu Çıktısı
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mevzuat gereği işletmenizde bulundurmanız gereken A4 alerjen dökümlerini ve kalori matrislerini tek tek Word veya Excel ile hazırlamak zorunda değilsiniz. 
              OxonomPOS yönetim panelinden &ldquo;Resmî Alerjen Listesi Yazdır&rdquo; butonuna basarak güncel ve bakanlık formatına uygun çıktıyı anında alabilirsiniz.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#EA004B]">
              <FolderTree className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Şubeler Arası Reçete ve Tedarikçi Farklılığı Takibi
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Aynı zincir markanın Kadıköy şubesinde yerel bir peynir tedarikçisi kullanılırken, Beşiktaş şubesinde endüstriyel krema kullanılıyor olabilir. 
              OxonomPOS çoklu şube mimarisi sayesinde genel menü merkezden yönetilirken, şube bazlı tedarikçi ve alerjen istisnaları anlık kontrol edilebilir.
            </p>
          </div>
        </div>
      </section>

      {/* 12. İşletmeler İçin Avantajlar */}
      <section id="avantajlar" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left scroll-mt-24 pt-8 border-t border-slate-100">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
          <TrendingUp className="w-3.5 h-3.5 text-[#EA004B]" />
          Bölüm 12 · İşletmelere Sağladığı Faydalar
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          Menü Şeffaflığının İşletmelere Sağladığı Somut Faydalar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#EA004B] flex items-center justify-center mb-3 font-bold text-sm">
              01
            </div>
            <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
              Yüksek Müşteri Güveni
            </h5>
            <p className="text-xs text-slate-600 leading-normal">
              Alerjen hassasiyeti olan ve sağlıklı beslenen misafirlerin restoranınızı tereddütsüz tercih etmesi.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#EA004B] flex items-center justify-center mb-3 font-bold text-sm">
              02
            </div>
            <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
              Sıfır Hukuki Risk
            </h5>
            <p className="text-xs text-slate-600 leading-normal">
              Tarım Bakanlığı denetimlerinde ceza ve ihtar risklerini minimize eden düzenli kayıt sistemi.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#EA004B] flex items-center justify-center mb-3 font-bold text-sm">
              03
            </div>
            <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
              İadelerin ve Yanılgıların Azalması
            </h5>
            <p className="text-xs text-slate-600 leading-normal">
              Müşterinin istemediği malzemeyi önceden görüp siparişten çıkarması sayesinde mutfak israfının önlenmesi.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-[#EA004B] flex items-center justify-center mb-3 font-bold text-sm">
              04
            </div>
            <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
              Kurumsal Marka Prestiji
            </h5>
            <p className="text-xs text-slate-600 leading-normal">
              Modern, şeffaf ve profesyonel bir gıda işletmesi imajının pekiştirilmesi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
