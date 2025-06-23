import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Light/Dark Mode Next.js Project",
  description:
    "This project is a simple demonstration of a Next.js application with a fully functional light/dark mode toggle. It uses Tailwind CSS v3 for styling and supports theme switching at runtime using react context, with the user's preference saved in localStorage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} //  bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
