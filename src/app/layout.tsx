// app/layout.tsx
import "./globals.css";
import { Barlow, Libre_Baskerville, Playfair_Display } from "next/font/google";


import type { Metadata } from "next";

const base = Barlow({
  subsets: ["latin"],
  variable: "--font-base",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const elegant = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-elegant",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your Site Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-mode="light"
      suppressHydrationWarning
      className={`scrollbar-thin ${base.variable} ${elegant.variable} }`}

    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
