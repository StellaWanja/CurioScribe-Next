import type { Metadata } from "next";
import { Suspense } from "react";
import { Poppins, Nunito_Sans } from "next/font/google";
import clsx from "clsx";

import ThemeProvider from "@/utils/ThemeProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer.tsx/Footer";
import Spinner from "@/components/ui/Spinner";
import "./globals.css";

const mainFont = Poppins({
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const monoFont = Nunito_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "CurioScribe",
  description: "An AI story and article generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${clsx(mainFont.variable, monoFont.variable)} `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Suspense fallback={<Spinner />}>{children}</Suspense>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
