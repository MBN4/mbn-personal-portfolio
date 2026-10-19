import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/lib/motion-context";
import Cursor from "@/components/Cursor";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://bilal-nadeem-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bilal Nadeem — Software Engineer & Full-Stack Developer",
  description:
    "Bilal Nadeem is a Software Engineer and full-stack MERN developer at Clustox, pursuing a Master's in Data Science and building AI-powered applications and automation.",
  keywords: [
    "Bilal Nadeem",
    "Software Engineer",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "AI Automation Developer",
    "Clustox",
  ],
  authors: [{ name: "Bilal Nadeem" }],
  openGraph: {
    title: "Bilal Nadeem — Software Engineer & Full-Stack Developer",
    description:
      "Full-stack MERN developer at Clustox, pursuing an M.S. in Data Science, building AI-powered applications and automation.",
    url: siteUrl,
    siteName: "Bilal Nadeem",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal Nadeem — Software Engineer & Full-Stack Developer",
    description:
      "Full-stack MERN developer at Clustox, pursuing an M.S. in Data Science, building AI-powered applications and automation.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="sarthak-theme">
        <MotionProvider>
          <Cursor />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
