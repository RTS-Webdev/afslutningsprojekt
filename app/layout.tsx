import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "./globals.css";

const aleoFont = Aleo({
    weight: "500",
    subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Byens Hus - Byens hus",
  description: "Byens hus er dit demokratihus. Her kan du låne lokaler, møde andre, fordybe dig, blive inspireret og bygge løsninger.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aleoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
