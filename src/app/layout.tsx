import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TCBS-CLI | Production-Ready Project Scaffolding",
  description: "TCBS-CLI is the ultimate scaffolding tool for full-stack developers. Instantly generate production-ready boilerplates for React Native Hybrid Mobile, Backend, and Web projects.",
  keywords: [
    "TCBS-CLI",
    "project scaffolding",
    "boilerplate",
    "React Native",
    "Next.js",
    "Node.js",
    "full-stack",
    "frontend",
    "backend",
    "open source"
  ],
  openGraph: {
    title: "TCBS-CLI | Production-Ready Project Scaffolding",
    description: "Instantly generate production-ready boilerplates for React Native Hybrid Mobile, Backend, and Web projects.",
    url: "https://tcbs-cli.com",
    siteName: "TCBS-CLI",
    images: [
      {
        url: "/TCBS.png",
        width: 1200,
        height: 630,
        alt: "TCBS-CLI Hero Image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TCBS-CLI | Production-Ready Project Scaffolding",
    description: "Instantly generate production-ready boilerplates for React Native Hybrid Mobile, Backend, and Web projects.",
    site: "@tcbs_cli",
    images: ["/TCBS.png"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
