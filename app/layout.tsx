import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PROFILE_DATA, EDUCATION_DATA } from "@/lib/data";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || "https://padillahramadansiregar.dev"),
  title: {
    default: "Padillah Ramadan Siregar | Web Developer & Programmer",
    template: "%s | Padillah Ramadan Siregar",
  },
  description:
    "Website portofolio personal resmi Padillah Ramadan Siregar - Mahasiswa Teknik Informatika Universitas Medan Area (UMA), Web Developer dan Programmer dengan fokus pada perancangan arsitektur web modern.",
  keywords: [
    "Padillah Ramadan Siregar",
    "Web Developer",
    "Programmer",
    "Teknik Informatika",
    "Universitas Medan Area",
    "Portofolio Personal",
    "Next.js",
  ],
  authors: [{ name: "Padillah Ramadan Siregar" }],
  creator: "Padillah Ramadan Siregar",
  openGraph: {
    title: "Padillah Ramadan Siregar | Web Developer & Programmer",
    description:
      "Website portofolio personal resmi Padillah Ramadan Siregar - Mahasiswa Teknik Informatika Universitas Medan Area.",
    type: "website",
    locale: "id_ID",
    siteName: "Portofolio Padillah Ramadan Siregar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padillah Ramadan Siregar | Web Developer & Programmer",
    description:
      "Website portofolio personal resmi Padillah Ramadan Siregar - Mahasiswa Teknik Informatika Universitas Medan Area.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE_DATA.fullName,
  jobTitle: PROFILE_DATA.roleTitle,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: EDUCATION_DATA.institution,
    department: EDUCATION_DATA.major,
  },
  email: `mailto:${PROFILE_DATA.contact.email}`,
  telephone: PROFILE_DATA.contact.whatsapp,
  sameAs: [
    PROFILE_DATA.contact.githubUrl,
    PROFILE_DATA.contact.linkedinUrl,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0A0A] text-white flex flex-col antialiased selection:bg-[#F59E0B]/30 selection:text-white">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded-md bg-[#F59E0B] px-4 py-2 text-xs font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
        >
          Lewati ke konten utama
        </a>

        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
