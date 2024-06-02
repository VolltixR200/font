import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lars Desmet",
  description: "Lars Desmet's Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <title>Lars Desmet</title>
      </head>
      <body className={inter.className}>
      <header>

      </header>
      {children}
      </body>
      </html>
  );
}
