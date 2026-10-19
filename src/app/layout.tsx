import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BackToTop } from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <SmoothScroll>
          {children}
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
