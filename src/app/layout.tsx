import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITZFIZZ — Scroll Experience",
  description:
    "A scroll-driven automotive hero experience built with Next.js and GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
