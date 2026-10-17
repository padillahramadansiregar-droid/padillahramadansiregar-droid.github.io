# Portofolio Personal — PADILLAH RAMADAN SIREGAR

[![Deploy to GitHub Pages](https://github.com/padillahramadansiregar-droid/padillahramadansiregar-droid.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/padillahramadansiregar-droid/padillahramadansiregar-droid.github.io/actions/workflows/deploy.yml)

Website portofolio personal milik **Padillah Ramadan Siregar**, mahasiswa Teknik Informatika Universitas Medan Area (UMA) yang sedang membangun jalur karier sebagai Web Developer / Programmer.

**Situs:** https://padillahramadansiregar-droid.github.io

Seluruh isi situs ditulis apa adanya: tanpa metrik fiktif, sertifikat palsu, atau klaim yang belum bisa dibuktikan. Desainnya bergaya gelap dan editorial teknis ("Midnight Technical Editorial") dengan aksen amber.

---

## Halaman

| Rute | Halaman | Isi |
|---|---|---|
| `/` | Beranda | Perkenalan singkat, ringkasan profil, teknologi pilihan, sorotan proyek, dan ringkasan pendidikan |
| `/tentang` | Tentang Saya | Latar belakang, motivasi belajar, tujuan karier, dan pendidikan formal |
| `/keahlian` | Keahlian | Inventaris teknologi per kategori, tanpa persentase atau rating buatan |
| `/proyek` | Proyek | Proyek yang sedang dikerjakan, lengkap dengan tangkapan layar, teknologi, dan tautan source code |
| `/kontak` | Kontak | Email, WhatsApp, lokasi, dan profil GitHub, LinkedIn, serta Instagram |
| `/kontak/kirim-email` | Kirim Email | Formulir pesan dengan validasi nama, email, subjek, dan pesan |

---

## Teknologi

- **Framework:** Next.js 15 (App Router) dan React 19
- **Bahasa:** TypeScript
- **Styling:** Tailwind CSS v4
- **Tipografi:** Sora (judul), Inter (teks), JetBrains Mono (kode)
- **Ikon:** Lucide React
- **SEO dan aksesibilitas:** JSON-LD (`Person`), `sitemap.ts`, `robots.ts`, tautan lompat ke konten, dan indikator fokus keyboard
- **Publikasi:** GitHub Pages melalui GitHub Actions (`.github/workflows/deploy.yml`)

---

## Struktur Proyek

```
.
├── .github/workflows/     # Alur deploy ke GitHub Pages
├── app/
│   ├── keahlian/          # Halaman Keahlian
│   ├── kontak/            # Halaman Kontak
│   │   └── kirim-email/   # Formulir pesan
│   ├── proyek/            # Halaman Proyek
│   ├── tentang/           # Halaman Tentang Saya
│   ├── layout.tsx         # Layout utama (Navbar, Footer, metadata, JSON-LD)
│   ├── page.tsx           # Beranda
│   ├── not-found.tsx      # Halaman 404
│   ├── globals.css        # Gaya global dan variabel warna
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── profile/           # ProfileAvatar, CampusLogo, EducationTimeline
│   ├── skills/            # SkillCategory, TechCategoryPanel, TechLogo, TechTile
│   ├── projects/          # ProjectCard, ProjectPreview
│   └── ui/                # Komponen umum (misalnya Reveal untuk animasi saat digulir)
├── hooks/                 # Custom hooks
├── lib/
│   ├── data.ts            # Sumber data tunggal untuk seluruh konten situs
│   ├── firebase.js        # Inisialisasi Firebase (opsional, membaca .env.local)
│   └── utils.ts
├── public/images/         # profile.jpg, proyek-portofolio.jpg, uma-logo.png
├── .env.example           # Template variabel lingkungan
└── next.config.ts
```

Impor memakai alias `@/`, misalnya `import Navbar from "@/components/layout/Navbar"`.

Folder `out/` (hasil build) dan `.next/` dibuat otomatis saat build dan **tidak di-commit** (sudah ada di `.gitignore`).

---

## Mengubah Isi Situs

Hampir semua teks tidak perlu diubah di dalam halaman. Cukup edit **`lib/data.ts`**:

| Yang ingin diubah | Bagian di `lib/data.ts` |
|---|---|
| Nama, bio, tujuan karier, kontak | `PROFILE_DATA` |
| Pendidikan, semester aktif, mata kuliah | `EDUCATION_DATA` (perbarui `currentYear` dan `currentSemester` tiap semester) |
| Daftar teknologi dan statusnya | `MAIN_TECH_CATEGORIES` |
| Teknologi yang tampil di Beranda | `HOME_TECH_NAMES` |
| Proyek di halaman Proyek | `PORTFOLIO_PROJECT` |

**Gambar:**
- Foto profil: `public/images/profile.jpg`. Jika file tidak ada, situs menampilkan monogram `PRS`.
- Tangkapan layar proyek: `public/images/proyek-portofolio.jpg`, atau sesuaikan `screenshotSrc` di `lib/data.ts` jika memakai `.png`. Gunakan tangkapan layar desktop (sekitar 1440×900) tanpa bingkai browser. Jika file tidak ada, tampil kerangka pengganti.
- Nama file harus sama persis, termasuk huruf besar-kecil, karena GitHub Pages membedakannya.

---

## Variabel Lingkungan

Salin `.env.example` menjadi `.env.local`, lalu isi seperlunya:

```env
# Opsional: kirim formulir ke layanan eksternal (misalnya Formspree)
NEXT_PUBLIC_FORM_ENDPOINT=

# Opsional: konfigurasi Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

Tanpa `NEXT_PUBLIC_FORM_ENDPOINT`, formulir kirim email membuka aplikasi email pengguna lewat `mailto:`. File `.env.local` tidak boleh di-commit.

**Saat deploy lewat GitHub Actions:** buka **Settings → Secrets and variables → Actions → tab Variables**, lalu tambahkan variabel dengan nama yang sama seperti di atas. Variabel `NEXT_PUBLIC_*` selalu ikut tertanam di kode yang dikirim ke browser, jadi jangan menyimpan rahasia di dalamnya.

---

## Menjalankan Proyek

```bash
npm install        # pasang dependensi (sekali saja)
npm run dev        # server pengembangan di http://localhost:3000
npm run build      # build produksi (hasil di folder out/), sekaligus cek ESLint dan TypeScript
npm run lint       # cek linting
```

Karena memakai `output: "export"`, hasil build berupa situs statis di folder `out/`. Untuk mencobanya secara lokal, sajikan folder itu dengan server statis (misalnya `npx serve out`).

---

## Deploy

Setiap push ke branch `main` menjalankan alur di `.github/workflows/deploy.yml`, yang membangun situs dan mempublikasikannya ke GitHub Pages. Pastikan di **Settings → Pages → Build and deployment → Source**, sumber publikasi diatur ke **GitHub Actions**.

Status deploy terakhir bisa dilihat di tab **Actions** atau lewat badge di bagian atas README ini.

---

## Kontak

- Email: padillahramadansiregar@gmail.com
- GitHub: https://github.com/padillahramadansiregar-droid
- LinkedIn: https://www.linkedin.com/in/padillah-ramadan-siregar-2a8100385

Kontak lengkap ada di halaman [Kontak](https://padillahramadansiregar-droid.github.io/kontak).