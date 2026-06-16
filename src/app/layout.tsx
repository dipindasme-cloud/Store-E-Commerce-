import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google"; // Native Google Font Loader
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

// Configure Google Font and map it to a CSS variable
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Keiton Store",
    template: "%s | Keiton Store",
  },
  description: "Luxury eCommerce Experience",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interFont.variable}>
      <body className="font-sans antialiased bg-background text-foreground flex min-h-screen flex-col">
        <CartProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}