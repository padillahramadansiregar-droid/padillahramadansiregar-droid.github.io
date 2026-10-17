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
}

export interface ProjectData {
  id: string;
  title: string;
  status: string;
  statusDetail: string;
  type: string;
  conceptSummary: string;
  problemStatement: string;
  targetAudience: string;
  solutionConcept: string;
  plannedScope: string[];
  designAndTechConsiderations: string[];
  completedTasks: string[];
  pendingImplementation: string[];
  nextSteps: string[];
  developmentMode: string;
  hasActiveDemo: boolean;
  hasActiveRepo: boolean;
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

export const EDUCATION_DATA: EducationData = {
  institution: "Universitas Medan Area (UMA)",
  faculty: "Fakultas Teknik",
  major: "Teknik Informatika",
  startYear: "2024",
  expectedYear: "2028 (Perkiraan)",
  statusNote: "Tahun angkatan 2024. Status perkuliahan aktif. Estimasi kelulusan 2028 merupakan perkiraan masa studi sarjana reguler.",
  location: "Medan, Sumatera Utara"
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

export const AMBERLENS_PROJECT: ProjectData = {
  id: "amberlens",
  title: "AmberLens",
  status: "Tahap Perencanaan dan Dokumentasi",
  statusDetail: "Proyek saat ini berada murni pada fase konseptualisasi arsitektur, pemetaan alur sistem, dan penyusunan dokumen spesifikasi teknis (SRS). Belum ada kode implementasi produksi, aplikasi berjalan, maupun server aktif.",
  type: "Proyek Mandiri (Personal Case Study)",
  conceptSummary: "Platform web interaktif yang dikonsepkan untuk menyatukan ekosistem penugasan mikro (micro-tasking) dari mitra, streaming dinamis secara langsung, koin digital internal, serta donasi interaktif berbasis Text-to-Speech (TTS).",
  problemStatement: "Banyak kreator pemula dan pengguna digital menghadapi kendala monetisasi mikro dan keterbatasan interaksi langsung yang terjangkau. AmberLens dirancang untuk mengeksplorasi jembatan antara penyelesaian tugas sederhana (micro-tasks) dengan interaksi siaran langsung real-time.",
  targetAudience: "Pengguna platform web yang ingin menyelesaikan micro-tasks, penikmat siaran langsung komunitas, serta kreator yang membutuhkan apresiasi suara terintegrasi.",
  solutionConcept: "Mengintegrasikan empat modul inti: penugasan tugas mikro dari mitra, sistem siaran live streaming berlatensi rendah, pencatatan transaksi saldo koin internal, dan pembacaan pesan donasi secara otomatis via TTS.",
  plannedScope: [
    "Modul Micro-tasking: Alur verifikasi pengerjaan tugas dari mitra dan pemberian reward koin.",
    "Modul Live Streaming: Antarmuka siaran langsung interaktif dengan kolom interaksi langsung.",
    "Modul Koin Internal: Sistem pencatatan saldo dan mutasi koin antar pengguna di dalam platform.",
    "Modul Text-to-Speech: Konversi pesan teks donasi menjadi suara terucap di siaran langsung."
  ],
  designAndTechConsiderations: [
    "Arsitektur Berbasis Event (Event-driven) untuk menangani pesan siaran dan notifikasi suara TTS.",
    "Integritas Data Transaksi Saldo (Ledger Verification) agar mutasi koin tidak mengalami selisih atau race condition.",
    "Antarmuka Responsif (Mobile-first Layout) yang nyaman diakses pada perangkat berlayar sempit.",
    "Prinsip Keamanan Data Pribadi dan validasi ketat pada setiap masukan teks sebelum diproses TTS."
  ],
  completedTasks: [
    "Penyusunan dokumen analisis kebutuhan perangkat lunak (SRS awal)",
    "Perancangan struktur halaman dan diagram hierarki navigasi pengguna",
    "Pemetaan alur sistem (flowchart) interaksi donasi TTS dan reward tugas",
    "Penyusunan batasan fitur dan kriteria penerimaan sistem"
  ],
  pendingImplementation: [
    "Pengembangan backend API dan server socket produksi",
    "Integrasi server streaming WebRTC/RTMP dan gateway pemrosesan audio TTS",
    "Penyediaan database terdistribusi dan enkripsi data saldo koin",
    "Pengujian performa sistem dan evaluasi keamanan penetrasi"
  ],
  nextSteps: [
    "Membuat prototipe wireframe antarmuka fidelitas tinggi (high-fidelity) di Figma",
    "Menyusun proof-of-concept (PoC) modul antarmuka web sederhana untuk simulasi layout",
    "Mengonsultasikan rancangan arsitektur dengan dosen pembimbing atau mentor teknis"
  ],
  developmentMode: "Direncanakan sebagai inisiatif mandiri yang dikembangkan sendiri dengan eksplorasi dan bantuan AI.",
  hasActiveDemo: false,
  hasActiveRepo: false
};