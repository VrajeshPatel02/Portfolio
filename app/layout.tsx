import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"

const archivo = localFont({
  variable: "--font-archivo",
  src: "./Archivo-Regular.woff2",
})

const clashDisplay = localFont({
  variable: "--font-clash-display",
  src: "./ClashDisplay-Semibold.woff2",
})

export const metadata: Metadata = {
  title: "Vrajesh Patel - Software Engineer & Web Developer",
  description: "vrajeshpatel.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${clashDisplay.variable} antialiased mx-auto px-4 page-padding`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
