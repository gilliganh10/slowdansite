import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slowdan - Premium Music Practice Tool",
  description: "The ultimate practice companion for guitarists and musicians. Slow down your favorite songs without changing pitch, loop difficult sections, and play along with precision. Inspired by 80s Japanese tech design.",
  keywords: "music practice, guitar practice, slow down music, audio practice tool, musician app, guitar learning, music learning",
  openGraph: {
    title: "Slowdan - Premium Music Practice Tool",
    description: "Master every note. Slow down, play along, level up with Slowdan.",
    type: "website",
    url: "https://slowdan.com",
    siteName: "Slowdan",
    locale: "en_US",
    images: [
      {
        url: "/slowdan-screen.png",
        width: 1200,
        height: 630,
        alt: "Slowdan - Slow down to speed up.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slowdan - Premium Music Practice Tool",
    description: "Master every note. Slow down, play along, level up with Slowdan.",
    images: ["/slowdan-screen.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      <script defer data-domain="slowdan.com" src="https://plausible.io/js/script.file-downloads.outbound-links.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 overflow-x-hidden`}
      >
        <Header />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
