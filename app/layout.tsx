import React from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import CanvasCursor  from "../Components/CanvasCursor";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "𝙎𝙝𝙤𝙗𝙝𝙞𝙩 𝙎𝙞𝙣𝙜𝙝 | 𝙋𝙤𝙧𝙩𝙛𝙤𝙡𝙞𝙤",
  description:
    "𝘗𝘰𝘳𝘵𝘧𝘰𝘭𝘪𝘰 𝘰𝘧 𝘚𝘩𝘰𝘣𝘩𝘪𝘵 𝘚𝘪𝘯𝘨𝘩, 𝘍𝘶𝘭𝘭-𝘴𝘵𝘢𝘤𝘬 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 𝘭𝘰𝘤𝘢𝘵𝘦𝘥 𝘪𝘯 𝘐𝘯𝘥𝘪𝘢",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} transition-colors duration-100`}>

        <ThemeProvider themes={["light", "dark"]} defaultTheme="system">
        <CanvasCursor />
          <div className="max-w-screen-lg min-h-screen mx-auto flex flex-col justify-center items-center">
            <Navbar />
            <main className="flex-grow flex flex-col justify-center items-center">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
