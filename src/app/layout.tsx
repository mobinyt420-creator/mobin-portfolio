import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mr Mobin | AI-Native Full-Stack Engineer & Digital Creator",
  description:
    "Official portfolio of Mr Mobin — High-performance Flutter apps, Next.js web applications, AI automation pipelines, and digital content creator reaching 200k+ users.",
  keywords: [
    "Mr Mobin",
    "Mobin",
    "Flutter Developer",
    "Next.js Developer",
    "AI Engineer",
    "OBIN App",
    "Software Engineer Bangladesh",
    "Upwork Freelance Developer",
    "Fiverr Top Rated",
    "AI UGC Ads Creator"
  ],
  authors: [{ name: "Mr Mobin" }],
  openGraph: {
    title: "Mr Mobin | AI-Native Engineer & Digital Creator",
    description:
      "Crafting production Flutter mobile apps, modern Next.js web platforms, and automated AI systems.",
    url: "https://mobin.dev",
    siteName: "Mr Mobin Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
