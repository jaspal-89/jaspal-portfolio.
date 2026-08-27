import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import FramerLazyMotion from "@/components/framer-lazy-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Jaspal — Video Editor & Creative Producer", template: "%s | Jaspal" },
  description: "Jaspal is a Video Editor & Creative Producer focused on clean edits, captions, UGC ads, faceless content, motion graphics and AI-powered video production.",
  keywords: ["Jaspal", "Video Editor", "Creative Producer", "UGC Ads", "AI Video", "Faceless Video", "Motion Graphics", "Premiere Pro", "After Effects", "CapCut Pro"],
  authors: [{ name: "Jaspal" }],
  creator: "Jaspal",
  publisher: "Jaspal",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Jaspal — Video Editor & Creative Producer",
    description: "Clean edits, engaging storytelling, UGC ads, faceless content and modern AI video production.",
    siteName: "Jaspal Portfolio",
  },
  category: "Video Editing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head><meta name="theme-color" content="#030305" /></head>
      <body className={`${inter.className} min-h-screen text-white`} style={{ background: "#030305", backgroundAttachment: "fixed" }}>
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <FramerLazyMotion>
              <MouseMoveEffect />
              <Navbar />
              <main>{children}</main>
              <Footer />
              <JumpToTop />
              <Toaster position="top-center" />
            </FramerLazyMotion>
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
