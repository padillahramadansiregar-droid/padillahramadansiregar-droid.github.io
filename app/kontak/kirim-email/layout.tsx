import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kirim Pesan Email | Padillah Ramadan Siregar",
  description: "Formulir pengiriman pesan langsung ke kotak masuk email Padillah Ramadan Siregar - Mahasiswa Teknik Informatika UMA.",
  openGraph: {
    title: "Kirim Pesan Email | Padillah Ramadan Siregar",
    description: "Kirim pesan langsung ke Padillah Ramadan Siregar melalui saluran email resmi.",
  },
  robots: {
    index: false, // Child contact form does not need direct search indexing
    follow: true,
  },
};

export default function KirimEmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
