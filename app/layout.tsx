import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chakra Mudra",
  description: "A modern landing page demo for Chakra Mudra built with Next.js.",
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
