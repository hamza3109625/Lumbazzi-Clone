// app/layout.tsx
import "./globals.css";
import { Host_Grotesk, Libre_Baskerville, Cormorant_Garamond } from "next/font/google";


import type { Metadata } from "next";

const base = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-base",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const elegant = Cormorant_Garamond({
  subsets: ["latin",],
  variable: "--font-elegant",
  weight: ["300","400", "700"],
  style: ["normal", "italic"],
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
