import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kumbh-sans",
});

const bebas = localFont({
  src: "./fonts/Bebas-Regular.ttf",
  display: "swap",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Merxpert - Amazon Brand Conversion System™",
  description:
    "Transform your Amazon listings into high-converting sales machines. See 29% more revenue while reducing ad spend with Merxpert's data-driven approach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${kumbhSans.variable}`}>
      <body className="antialiased mx-auto font-sans">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
