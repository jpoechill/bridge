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
  title: "Khmer Bridge · Mentorship for Khmer Youth",
  description: "Khmer Bridge connects Khmer youth with Khmer-American professionals for mentorship, career guidance, and community.",
  keywords: [
    "Khmer mentorship",
    "Cambodian American professionals", 
    "youth career guidance",
    "Oakland community",
    "Asian American mentorship",
    "professional development",
    "cultural mentorship",
    "Bay Area youth programs"
  ],
  authors: [{ name: "Khmer Bridge Team" }],
  creator: "Khmer Bridge",
  publisher: "Khmer Bridge",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khmerbridge.org",
    title: "Khmer Bridge · Mentorship for Khmer Youth",
    description: "Connect with Khmer mentors. Grow your career. Stay rooted. Khmer Bridge links Khmer youth with Khmer‑American professionals for 1:1 guidance, skill‑building, and community.",
    siteName: "Khmer Bridge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khmer Bridge - Mentorship for Khmer Youth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khmer Bridge · Mentorship for Khmer Youth",
    description: "Connect with Khmer mentors. Grow your career. Stay rooted.",
    images: ["/og-image.jpg"],
    creator: "@khmerbridge",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://khmerbridge.org",
  },
  category: "education",
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
