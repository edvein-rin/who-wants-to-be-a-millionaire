import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Who wants to be a millionaire?",
    template: "%s | Who wants to be a millionaire?",
  },
  description:
    'A simple "Who wants to be a millionaire" web game.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interFont.variable}>{children}</body>
    </html>
  );
}
