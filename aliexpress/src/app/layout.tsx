import type { Metadata } from "next";
import { Inter,Barlow } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const barlowFont = Barlow({ subsets: ["latin"],
  weight: ["400", "700"],
 });

export const metadata: Metadata = {
  title: "AliExpress Website",
  description: "Welcome to AliExpress website, we have many products for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
