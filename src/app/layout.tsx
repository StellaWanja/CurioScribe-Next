import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Poppins, Nunito_Sans } from "next/font/google";
import clsx from "clsx";

import ThemeProvider from "@/utils/Theme/ThemeProvider";
import RespectMotionPreferences from "@/utils/RespectMotionPreferences";
import Spinner from "@/components/ui/Spinner";
import "./globals.css";

// Poppins Font
const mainFont = Poppins({
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
// Nunito Sans Font
const monoFont = Nunito_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
});

// Metadata
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
    // Motion Config to allow for motion disabling if set by user
    <RespectMotionPreferences>
      <html lang="en">
        <body className={`${clsx(mainFont.variable, monoFont.variable)} `}>
          {/* Theme Provider for dark / light mode */}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Suspense fallback={<Spinner />}>{children}</Suspense>
          </ThemeProvider>
        </body>
      </html>
    </RespectMotionPreferences>
  );
}
