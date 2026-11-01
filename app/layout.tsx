import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#EA004B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "oxonom pos — Restoran Operasyonunuzu Tek Akışta Yönetin",
  description:
    "Siparişten mutfak ekranına, adisyondan masaya tam senkronize yeni nesil restoran yönetim sistemi ve POS altyapısı.",
  keywords: [
    "oxonom pos",
    "restoran yönetim sistemi",
    "qr menü",
    "kds mutfak ekranı",
    "adisyon programı",
    "açık hesap",
    "pos sistemi",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={jakarta.variable}>
      <body className="antialiased min-h-screen bg-white text-slate-900 selection:bg-[#EA004B] selection:text-white">
        {children}
        <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      </body>
    </html>
  );
}
