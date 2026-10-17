# Portofolio Personal — PADILLAH RAMADAN SIREGAR

Website portofolio personal resmi untuk **Padillah Ramadan Siregar**, mahasiswa Teknik Informatika Universitas Medan Area (UMA) dan calon Web Developer / Programmer.

Situs ini dibangun menggunakan filosofi **Midnight Technical Editorial** yang bersih, elegan, dan menjunjung tinggi integritas data (tanpa metrik fiktif, sertifikat palsu, atau klaim yang tidak terverifikasi).

---

## 1. Sitemap Inti (5 Halaman Utama + 1 Rute Formulir)

Sesuai keputusan arsitektur (Opsi A), website ini memiliki tepat 5 halaman utama pada navigasi utama, ditambah 1 rute turunan khusus formulir pesan:

| No | Rute | Halaman | Status & Konten Utama |
|---|---|---|---|
| 1 | `/` | **Beranda** | Hero, nama profesional, target karier, ringkasan profil jujur, avatar / monogram PRS, sorotan AmberLens, ringkasan pendidikan UMA, dan navigasi CTA. |
| 2 | `/tentang` | **Tentang Saya** | Latar belakang, motivasi belajar, pendekatan rekayasa web, tujuan karier, foto/monogram avatar, serta section terpadu **Pendidikan Formal** (Universitas Medan Area, Fakultas Teknik, Teknik Informatika, Mulai 2024, Estimasi 2028). |
| 3 | `/keahlian` | **Keahlian** | Inventaris 6 kategori teknologi (Bahasa Pemrograman, Frontend, Backend, Database, Tools, Bidang yang Diperdalam) berlandaskan konteks akademik tanpa rating/persentase fiktif. |
| 4 | `/proyek` | **Proyek** | Studi kasus perancangan sistem **AmberLens** dengan status resmi **"Tahap Perencanaan dan Dokumentasi"** (10 subbagian lengkap: masalah, solusi, lingkup, arsitektur, tugas selesai, langkah berikutnya) beserta empty state jujur untuk inisiatif lain. |
| 5 | `/kontak` | **Kontak** | Pusat komunikasi langsung: kartu email dengan tombol Salin Email & Kirim Email, kartu WhatsApp resmi, lokasi & zona waktu (WIB), serta profil GitHub, LinkedIn, dan Instagram. |
| 5a | `/kontak/kirim-email` | **Kirim Email (Sub-rute)** | Formulir pesan terintegrasi dengan validasi lengkap (nama, email, subjek, pesan), umpan balik real-time, dan pengalihan aman ke aplikasi email (`mailto:`) atau integrasi endpoint. |

---

## 2. Saluran Komunikasi Resmi

- **Email**: `padillahramadansiregar@gmail.com`
- **WhatsApp**: `+62 851-8804-2374` (Tautan: `https://wa.me/6285188042374?text=Halo%20Padillah%20Ramadan%20Siregar...`)
- **Lokasi**: Medan, Sumatera Utara, Indonesia (WIB / UTC+7)
- **GitHub**: `https://github.com/padillahramadansiregar-droid`
- **Repository Website**: `https://github.com/padillahramadansiregar-droid/padillahramadansiregar-droid.github.io.git`
- **LinkedIn**: `https://www.linkedin.com/in/padillah-ramadan-siregar-2a8100385`
- **Instagram**: `https://www.instagram.com/its.padillah/` (Ditandai: *Perlu konfirmasi pemilik untuk publikasi aktif*)

---

## 3. Konfigurasi Pengiriman Formulir Email

Halaman `/kontak/kirim-email` mendukung dua metode pengiriman:

1. **Metode Utama Otomatis (Fallback A - Default)**:
   Membuka aplikasi email bawaan pengguna secara otomatis via protokol `mailto:` dengan subjek dan isi pesan yang telah diformat rapi dari input formulir. Metode ini 100% aman, transparan, dan tidak memerlukan server backend rahasia.

2. **Metode Layanan Eksternal (Opsional)**:
   Jika Anda memiliki endpoint Formspree atau webhook backend pengiriman email, tambahkan variabel lingkungan di `.env.local`:
   ```env
   NEXT_PUBLIC_FORM_ENDPOINT="https://formspree.io/f/your_form_id"
   ```
   Sistem akan secara otomatis mengirim data formulir via HTTP POST JSON ke endpoint tersebut.

---

## 4. Penggunaan Foto Asli Profil

Situs telah dilengkapi komponen `ProfileAvatar` cerdas:
- Mencari file foto profil di `public/images/profile.jpg` atau `public/profile.jpg`.
- Jika file tersebut ada, foto asli akan langsung ditampilkan secara optimal dengan `next/image`.
- Jika belum tersedia, sistem secara otomatis dan anggun menampilkan monogram arsitektural teknis `PRS` dengan aksen amber (tanpa menggunakan foto sintetis palsu yang melanggar privasi pemilik).
- **Panduan Pengguna**: Saat mengekspor proyek ke komputer lokal atau Visual Studio Code, cukup simpan foto Anda (`WhatsApp Image 2026-10-16 at 00.08.59.jpeg`) ke dalam folder `public/` dengan nama `profile.jpg` (atau `public/images/profile.jpg`).

---

## 5. Stack Teknologi & Standar Rekayasa

- **Framework**: Next.js 15 (App Router, Server Components by default)
- **Library Antarmuka**: React 19
- **Sistem Styling**: Tailwind CSS v4 & CSS Variables (`Midnight Technical Editorial`)
- **Tipografi**: Sora (Headings), Inter (Body Text), JetBrains Mono (Kode/Tabular)
- **Ikon**: Lucide React
- **SEO & Aksesibilitas**: JSON-LD Schema.org (`Person`), dynamic `sitemap.ts`, dynamic `robots.ts`, dynamic `icon.svg`, ARIA status live regions, skip link `#main-content`, dan `:focus-visible` ring.
- **Bahasa Antarmuka**: Bahasa Indonesia murni (`lang="id"`)

---

## 6. Menjalankan & Membangun Proyek

```bash
# Menjalankan development server
npm run dev

# Membangun aplikasi untuk produksi (termasuk verifikasi ESLint & TypeScript)
npm run build

# Menjalankan server produksi
npm run start

# Menjalankan validasi linting
npm run lint
```
