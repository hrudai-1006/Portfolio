import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySerif = Newsreader({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hrudai — ChaosVerse | Agents, Vision & Recovery",
  description:
    "Hrudai runs ChaosVerse: multi-agent systems and computer vision pipelines, taken to hackathons to see what breaks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} h-full scroll-smooth bg-[#010103] antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-[#010103] text-white antialiased">{children}</body>
    </html>
  );
}
