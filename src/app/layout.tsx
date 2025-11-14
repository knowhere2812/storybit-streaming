// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StoryBit Streaming",
  description: "Streaming dashboard clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-neutral-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
