import type { Metadata } from "next";
import { Roboto_Flex } from 'next/font/google'
import "./globals.css";
import Loader from "./components/ui/loader";

const roboto = Roboto_Flex({
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vegas",
  description: "Beauty bar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="md:bg-foreground scroll-smooth">
      <body className={`antialiased ${roboto.className}`}>
        {children}
        <Loader />
      </body>
    </html>
  );
}
