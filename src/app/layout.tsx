import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import "swiper/css";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://berlin-gallery.vercel.app"),
  title: "Hooman Visuals",
  description:
    "Unique digital photos and professional Lightroom presets for photographers and creators. Enhance your projects with stunning visuals.",
  icons: {
    icon: "/favicon.ico",
    apple: { url: "/logo.png", sizes: "180x180" },
    other: [{ rel: "mask-icon", url: "/logo.png" }],
  },
  openGraph: {
    type: "website",
    title: "Hooman Visuals",
    description:
      "Unique digital photos and professional Lightroom presets for photographers and creators. Enhance your projects with stunning visuals.",

    url: "https://berlin-gallery.vercel.app",
    images: ["/logo.png"],
    // images: ["/icons/maskable-512x512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hooman Visuals",
    description:
      "Unique digital photos and professional Lightroom presets for photographers and creators. Enhance your projects with stunning visuals.",

    images: ["/logo.png"],
  },
  other: {
    "msapplication-navbutton-color": "#00113a",
    "apple-mobile-web-app-status-bar-style": "#00113a",
  },
};

export const viewport: Viewport = {
  themeColor: "#00113a",
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
