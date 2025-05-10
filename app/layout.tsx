import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ["latin"],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "nupers",
  description: "Dev Portfolio for nupers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
