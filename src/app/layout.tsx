import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Let's Summarize",
  description: "AI-powered text summarization tool for YouTube videos, articles, and PDF documents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased relative min-h-screen bg-red overflow-x-hidden`}
      >
        <Image
          src="/images/body-blur.png"
          alt="Blur"
          className="absolute -top-[70%] left-1/2 -translate-x-1/2 -z-0"
          width={2000}
          height={1000}
        />
        {children}
      </body>
    </html>
  );
}
