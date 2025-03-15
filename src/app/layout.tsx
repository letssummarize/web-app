import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { metaData } from "@/data/metaData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${poppins.className} ${geistMono.variable} antialiased relative min-h-screen overflow-x-hidden`}
      >
        <Image
          src="/images/body-blur.png"
          alt=""
          aria-hidden="true"
          className="absolute -top-[700px] left-1/2 -translate-x-1/2 -z-0 pointer-events-none opacity-80"
          width={2000}
          height={1000}
        />
        <div className="relative z-1 h-full flex flex-col space-y-[160px]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
