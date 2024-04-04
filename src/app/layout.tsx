import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://eu.umami.is/script.js"
          data-website-id="5c0c864c-2ba0-436f-af82-1b919d7ee1af"
        ></Script>
      </head>
      <body className={clsx(inter.className, "bg-neutral-950")}>
        <GoogleTagManager gtmId="GTM-PSFSB7F9" />
        {children}
      </body>
    </html>
  );
}
