# OxonomPos Tanıtım Sitesi

> Türkiye'nin En Akıllı Restoran Yönetim Platformu — Profesyonel tanıtım sitesi

## 🚀 Hızlı Başlangıç

```bash
npm install
npm run dev
```

Tarayıcıda açın: [http://localhost:3000](http://localhost:3000)

Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

**Varsayılan kimlik bilgileri:**
- Kullanıcı adı: `admin`
- Şifre: `oxonompos2025`

## 🔧 Environment Variables

Vercel'de aşağıdaki environment variable'ları tanımlayın:

```env
# Auth
ADMIN_USERNAME=admin
ADMIN_PASSWORD=guclu-bir-sifre-girin
JWT_SECRET=cok-gizli-bir-jwt-secret-girin

# Vercel Blob (görsel yükleme için)
BLOB_READ_WRITE_TOKEN=vercel_blob_xxx...
```

## 📁 Proje Yapısı

```
├── app/
│   ├── page.tsx              # Ana sayfa (landing page)
│   ├── admin/
│   │   ├── dashboard/        # Admin dashboard
│   │   ├── hero/             # Hero slider yönetimi
│   │   ├── seo/              # SEO & Open Graph ayarları
│   │   ├── contact/          # İletişim bilgileri
│   │   ├── testimonials/     # Yorumlar yönetimi
│   │   └── media/            # Medya galerisi
│   └── api/admin/            # API route'ları
├── components/
│   ├── site/                 # Landing page bileşenleri
│   └── admin/                # Admin panel bileşenleri
├── lib/
│   ├── types.ts              # TypeScript tipleri
│   ├── db.ts                 # JSON tabanlı veri depolama
│   ├── auth.ts               # JWT authentication
│   └── defaults.ts           # Varsayılan içerik
└── middleware.ts             # Admin route koruması
```

## 🎨 Admin Panel Özellikleri

| Sekme | Özellikler |
|-------|-----------|
| **Hero & Slider** | Slayt ekle/düzenle/sil, görsel yükle, CTA metinleri |
| **SEO & Open Graph** | Title, description, OG image upload, Twitter Card, GEO tags |
| **İletişim** | Telefon, WhatsApp, e-posta, adres, sosyal medya |
| **Yorumlar** | Testimonial ekle/düzenle/sil, yıldız puanı |
| **Medya Galerisi** | Drag-and-drop görsel yükleme, URL kopyalama |

## 🌐 Deployment

### GitHub

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create oxobee/oxonompos-tanitim --public
git push -u origin main
```

### Vercel

```bash
npx vercel --prod
```

## 📐 Teknolojiler

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animasyonlar)
- **jose** (JWT authentication)
- **@vercel/blob** (görsel depolama)

## 🔒 Güvenlik Notu

Production'a deploy etmeden önce:
1. `ADMIN_PASSWORD` environment variable ile güçlü şifre belirleyin
2. `JWT_SECRET` environment variable ile güçlü secret belirleyin
3. Vercel'de `BLOB_READ_WRITE_TOKEN` ayarlayın

---

*OxonomPos © 2025-2026 — Türkiye'nin Yapay Zeka Destekli Restoran Yönetim Platformu*
