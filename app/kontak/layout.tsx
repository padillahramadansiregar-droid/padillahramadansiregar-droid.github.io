import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | Padillah Ramadan Siregar",
  description: "Saluran komunikasi langsung Padillah Ramadan Siregar via Email, WhatsApp resmi, GitHub, dan profil LinkedIn.",
  openGraph: {
    title: "Kontak | Padillah Ramadan Siregar",
    description: "Hubungi Padillah Ramadan Siregar via Email resmi dan WhatsApp.",
  },
};

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
