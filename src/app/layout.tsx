import type { Metadata } from "next";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import clsx from "clsx";

import ThemeProvider from "@/utils/ThemeProvider";
import Header from "@/components/Header/Header";
import "./globals.css";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export const metadata: Metadata = {
  title: "Curioscribe",
  description: "An AI story and article generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(mainFont.variable, monoFont.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
