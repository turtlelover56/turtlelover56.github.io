import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Anastasia Davis | Developer Portfolio",
  description:
    "Portfolio for Anastasia Davis, a recent computer science graduate focused on front-end development, accessible web experiences, and thoughtful design.",
  icons: {
    icon: [
      { url: "/light-mode-icon.png", media: "(prefers-color-scheme: light)" },
      { url: "/dark-mode-icon.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/light-mode-icon.png",
    apple: "/light-mode-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
