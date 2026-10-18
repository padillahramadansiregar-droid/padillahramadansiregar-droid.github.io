/**
 * Sumber data resmi portofolio Padillah Ramadan Siregar.
 * Sepenuhnya berlandaskan dokumen D01–D09 yang disetujui.
 * Tidak ada data fiktif, angka pencapaian palsu, metrik buatan, atau klaim yang tidak terverifikasi.
 */

export interface SkillCategoryData {
  id: string;
  title: string;
  description: string;
  learningContext: string;
  items: string[];
}

export interface EducationData {
  institution: string;
  faculty: string;
  major: string;
  startYear: string;
  expectedYear: string;
  statusNote: string;
  location: string;
  startYearNumber: number;
  expectedYearNumber: number;
  currentYear: number;
  currentSemester: number;
  campusAddress: string;
  mapsUrl: string;
  logoSrc: string;
  organization: string;
  relevantCourses: string[];
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface ShowcasePage {
  label: string;
  path: string;
}

export interface ProjectData {
  id: string;
  title: string;
  type: string;
  year: string;
  status: string;
  summary: string;
  highlights: string[];
  facts: ProjectFact[];
  technologies: string[];
  repoUrl: string;
  /** Alamat situs tanpa "https://", ditampilkan di bar browser pratinjau. */
  urlLabel: string;
}

export const PROFILE_DATA = {
  fullName: "PADILLAH RAMADAN SIREGAR",
  roleTitle: "Web Developer / Programmer",
  tagline: "Membangun fondasi web modern, efisien, dan berorientasi pada arsitektur sistem yang andal.",
  bioShort: "Mahasiswa Teknik Informatika Universitas Medan Area yang berfokus mendalami pengembangan web terstruktur, pemrograman sistem, dan perancangan aplikasi fungsional.",
  bioLong: [
    "Saya adalah mahasiswa Teknik Informatika di Universitas Medan Area (UMA) yang memiliki minat mendalam pada rekayasa perangkat lunak web dan pemecahan masalah komputasi terstruktur.",
    "Perjalanan belajar saya berpusat pada eksplorasi berkelanjutan terhadap standar teknologi web modern, memahami tata kelola kode yang bersih (clean code), dan menerjemahkan kebutuhan sistem ke dalam rancangan arsitektur yang terukur.",
    "Saya meyakini bahwa fondasi programmer yang baik dibangun dari kejujuran teknis, pemahaman fundamental yang kokoh, serta kesiapan untuk terus beradaptasi dengan metodologi pengembangan industri terkini."
  ],
  careerGoals: [
    "Membangun kapabilitas profesional sebagai Web Developer / Programmer yang berorientasi pada kualitas kode dan struktur sistem.",
    "Memperkuat pemahaman mendalam tentang siklus hidup pengembangan perangkat lunak (SDLC) dari perencanaan arsitektur hingga deployment.",
    "Membuka kesempatan kolaborasi, kontribusi pada proyek nyata, serta peluang freelance dan magang yang menantang."
  ],
  contact: {
    email: "padillahramadansiregar@gmail.com",
    whatsapp: "+62 851-8804-2374",
    whatsappUrl: "https://wa.me/6285188042374?text=Halo%20Padillah%20Ramadan%20Siregar%2C%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
    githubUrl: "https://github.com/padillahramadansiregar-droid",
    githubRepoUrl: "https://github.com/padillahramadansiregar-droid/padillahramadansiregar-droid.github.io.git",
    linkedinUrl: "https://www.linkedin.com/in/padillah-ramadan-siregar-2a8100385",
    linkedinDisplay: "padillah-ramadan-siregar-2a8100385",
    instagramUrl: "https://www.instagram.com/its.padillah/",
    instagramDisplay: "@its.padillah",
    instagramNote: "Perlu konfirmasi pemilik sebelum publikasi aktif",
    location: "Medan, Sumatera Utara, Indonesia",
    timezone: "WIB (UTC+7)"
  }
};

// PERBARUI MANUAL setiap pergantian semester: currentYear dan currentSemester.
export const EDUCATION_DATA: EducationData = {
  institution: "Universitas Medan Area (UMA)",
  faculty: "Fakultas Teknik",
  major: "Teknik Informatika",
  startYear: "2024",
  expectedYear: "2028 (Perkiraan)",
  statusNote: "Tahun angkatan 2024. Status perkuliahan aktif pada semester 5. Estimasi kelulusan 2028 merupakan perkiraan masa studi sarjana reguler.",
  location: "Medan, Sumatera Utara",
  startYearNumber: 2024,
  expectedYearNumber: 2028,
  currentYear: 2026,
  currentSemester: 5,
  campusAddress: "Jl. Kolam No. 1 Medan Estate / Jl. Gedung PBSI, Medan 20223",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Universitas+Medan+Area+Jl.+Kolam+No.+1+Medan+Estate+Medan+20223",
  logoSrc: "/images/uma-logo.png",
  organization: "Belum ada",
  relevantCourses: [
    "Algoritma dan Pemrograman",
    "Struktur Data",
    "Pemrograman Berorientasi Objek",
    "Basis Data",
    "Interaksi Manusia dan Komputer",
    "Dasar Rekayasa Perangkat Lunak",
    "Sistem Analisis dan Perancangan",
    "Pemrograman Web",
    "Pembelajaran Mesin dan Jaringan Neural",
    "Arsitektur Cloud dan DevOps",
  ],
};

export type TechStatus = "sudah-dipraktikkan" | "sedang-dipelajari" | "belum-dikonfirmasi";

export interface TechItem {
  name: string;
  category: string;
  status: TechStatus;
}

export interface TechCategory {
  id: string;
  title: string;
  icon: string;
  items: TechItem[];
}

export interface FocusAreaItem {
  name: string;
  description: string;
}

export const MAIN_TECH_CATEGORIES: TechCategory[] = [
  {
    id: "programming-languages",
    title: "Bahasa Pemrograman",
    icon: "code",
    items: [
      { name: "HTML", category: "Bahasa Pemrograman", status: "belum-dikonfirmasi" },
      { name: "CSS", category: "Bahasa Pemrograman", status: "belum-dikonfirmasi" },
      { name: "PHP", category: "Bahasa Pemrograman", status: "belum-dikonfirmasi" },
      { name: "TypeScript", category: "Bahasa Pemrograman", status: "belum-dikonfirmasi" },
      { name: "C++", category: "Bahasa Pemrograman", status: "belum-dikonfirmasi" },
      { name: "C", category: "Bahasa Pemrograman", status: "belum-dikonfirmasi" },
      { name: "Java", category: "Bahasa Pemrograman", status: "belum-dikonfirmasi" },
      { name: "Python", category: "Bahasa Pemrograman", status: "belum-dikonfirmasi" },
      { name: "JavaScript", category: "Bahasa Pemrograman", status: "belum-dikonfirmasi" },
    ],
  },
  {
    id: "frontend-frameworks",
    title: "Frontend dan Framework/UI",
    icon: "layout",
    items: [
      { name: "Next.js", category: "Frontend dan Framework/UI", status: "belum-dikonfirmasi" },
      { name: "Bootstrap", category: "Frontend dan Framework/UI", status: "belum-dikonfirmasi" },
      { name: "Tailwind CSS", category: "Frontend dan Framework/UI", status: "belum-dikonfirmasi" },
      { name: "Vue.js", category: "Frontend dan Framework/UI", status: "belum-dikonfirmasi" },
      { name: "Vite", category: "Frontend dan Framework/UI", status: "belum-dikonfirmasi" },
      { name: "React", category: "Frontend dan Framework/UI", status: "belum-dikonfirmasi" },
    ],
  },
  {
    id: "backend-server",
    title: "Backend dan Framework Server",
    icon: "server",
    items: [
      { name: "Node.js", category: "Backend dan Framework Server", status: "belum-dikonfirmasi" },
      { name: "Express.js", category: "Backend dan Framework Server", status: "belum-dikonfirmasi" },
      { name: "Laravel", category: "Backend dan Framework Server", status: "belum-dikonfirmasi" },
      { name: "CodeIgniter", category: "Backend dan Framework Server", status: "belum-dikonfirmasi" },
      { name: "Django", category: "Backend dan Framework Server", status: "belum-dikonfirmasi" },
    ],
  },
  {
    id: "databases",
    title: "Database dan Layanan Data",
    icon: "database",
    items: [
      { name: "MySQL", category: "Database dan Layanan Data", status: "belum-dikonfirmasi" },
      { name: "PostgreSQL", category: "Database dan Layanan Data", status: "belum-dikonfirmasi" },
      { name: "MongoDB", category: "Database dan Layanan Data", status: "belum-dikonfirmasi" },
      { name: "Firebase", category: "Database dan Layanan Data", status: "belum-dikonfirmasi" },
      { name: "SQLite", category: "Database dan Layanan Data", status: "belum-dikonfirmasi" },
    ],
  },
  {
    id: "tools-platforms",
    title: "Tools dan Platform",
    icon: "wrench",
    items: [
      { name: "Visual Studio Code", category: "Tools dan Platform", status: "belum-dikonfirmasi" },
      { name: "Git", category: "Tools dan Platform", status: "belum-dikonfirmasi" },
      { name: "GitHub", category: "Tools dan Platform", status: "belum-dikonfirmasi" },
      { name: "Figma", category: "Tools dan Platform", status: "belum-dikonfirmasi" },
      { name: "XAMPP", category: "Tools dan Platform", status: "belum-dikonfirmasi" },
      { name: "Postman", category: "Tools dan Platform", status: "belum-dikonfirmasi" },
      { name: "Vercel", category: "Tools dan Platform", status: "belum-dikonfirmasi" },
      { name: "Netlify", category: "Tools dan Platform", status: "belum-dikonfirmasi" },
    ],
  },
];

export const FUTURE_FOCUS_AREAS: FocusAreaItem[] = [
  {
    name: "UX/UI Design",
    description: "Pendalaman tata letak antarmuka intuitif, alur pengguna (user flow), dan interaksi manusia-komputer.",
  },
  {
    name: "Design System",
    description: "Penyusunan komponen desain modular, token desain terstandarisasi, dan konsistensi visual multi-platform.",
  },
  {
    name: "Framer Motion",
    description: "Eksplorasi mikro-interaksi dinamis dan transisi animasi berbasis fisika pada ekosistem React.",
  },
  {
    name: "Product Thinking",
    description: "Pola pikir pemecahan masalah yang berfokus pada nilai guna nyata, validasi solusi, dan kebutuhan pengguna.",
  },
];

// Compatibility alias for other components if needed
export const SKILL_CATEGORIES = MAIN_TECH_CATEGORIES.map((cat) => ({
  id: cat.id,
  title: cat.title,
  description: `Inventarisasi teknologi ${cat.title.toLowerCase()} dalam proses belajar dan eksplorasi.`,
  learningContext: "Akademik & Eksplorasi Mandiri",
  items: cat.items.map((i) => i.name),
}));

// Ringkasan teknologi untuk Beranda (maks. 8). Diambil dari inventaris MAIN_TECH_CATEGORIES
// agar tidak ada duplikasi data. Ubah daftar nama ini untuk mengganti isi ringkasan.
const HOME_TECH_NAMES = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
];

export const HOME_TECH_HIGHLIGHTS: TechItem[] = HOME_TECH_NAMES.flatMap((name) => {
  const found = MAIN_TECH_CATEGORIES.flatMap((cat) => cat.items).find((item) => item.name === name);
  return found ? [found] : [];
});

export const PORTFOLIO_PROJECT: ProjectData = {
  id: "portofolio-personal",
  title: "Situs Portofolio Personal",
  type: "Web App",
  year: "2026",
  status: "Sedang Dikembangkan",
  summary: "Situs yang sedang Anda lihat ini. Dibangun dengan Next.js dan Tailwind CSS dengan bantuan AI, lalu disesuaikan sendiri. Teks profil, pendidikan, dan keahlian dikelola dari satu berkas data, dan situs dipublikasikan otomatis lewat GitHub Actions.",
  highlights: [
    "Lima halaman utama: Beranda, Tentang Saya, Keahlian, Proyek, dan Kontak",
    "Formulir kirim email dengan validasi nama, email, subjek, dan pesan",
    "Tema gelap bergaya editorial teknis, dengan tampilan responsif untuk HP dan desktop",
    "Kontak langsung lewat email, WhatsApp, GitHub, dan LinkedIn",
  ],
  facts: [
    { label: "Halaman utama", value: "5" },
    { label: "Framework", value: "Next.js 15" },
    { label: "Styling", value: "Tailwind v4" },
    { label: "Deploy", value: "Actions" },
  ],
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub Pages"],
  repoUrl: "https://github.com/padillahramadansiregar-droid/padillahramadansiregar-droid.github.io",
  urlLabel: "padillahramadansiregar-droid.github.io",
};

// Halaman yang diputar di pratinjau proyek (urutan tab).
export const SHOWCASE_PAGES: ShowcasePage[] = [
  { label: "Beranda", path: "/" },
  { label: "Tentang", path: "/tentang/" },
  { label: "Keahlian", path: "/keahlian/" },
  { label: "Proyek", path: "/proyek/" },
  { label: "Kontak", path: "/kontak/" },
];
