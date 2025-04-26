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
    "Test your knowledge and climb to victory! Answer 12 questions correctly to win — but one mistake ends it all. Ready for the challenge?",
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
