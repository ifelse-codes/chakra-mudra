import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chakra CI/CD | Local = You",
  description: "Synchronize your local environment with the cosmic pipeline.",
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
