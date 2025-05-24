import type { Metadata } from "next";
import { Cairo, Amiri } from "next/font/google";
import "./globals.css";

// Cairo font - modern, clean, perfect for booking apps UI
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Amiri font - elegant serif Arabic font for headings
const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "تطبيق الحجوزات",
  description: "تطبيق حجز متطور وسهل الاستخدام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${amiri.variable} antialiased font-cairo`}
        style={{
          fontFamily: "var(--font-cairo), system-ui, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
