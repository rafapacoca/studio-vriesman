import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studiovriesman.com.br"),
  title: "Studio Vriesman | Em breve",
  description:
    "O novo site do Studio Vriesman está chegando. Beleza, cuidado e exclusividade em cada detalhe.",
  applicationName: "Studio Vriesman",
  openGraph: {
    title: "Studio Vriesman | Em breve",
    description: "Uma nova experiência de beleza está chegando.",
    url: "https://www.studiovriesman.com.br",
    siteName: "Studio Vriesman",
    locale: "pt_BR",
    type: "website",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
