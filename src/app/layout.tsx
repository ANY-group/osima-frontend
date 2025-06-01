import type { Metadata } from "next";
import { Roboto_Flex } from 'next/font/google'
import "./globals.css";
import Loader from "./components/ui/loader";
import AuthProvider from "./(footerless)/profile/components/controllers/auth-provider";
import fetchUser from "@/lib/auth/usecases/fetch-user";
import CartProvider from "./(default)/checkout/components/controllers/cart-provider";
import FavoritesProvider from "./(default)/catalog/favorites/components/controllers/favorites-provider";

const roboto = Roboto_Flex({
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vegas",
  description: "Beauty bar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await fetchUser()
    .catch(() => {
      return null;
    });

  return (
    <html lang="ru" className="md:bg-foreground scroll-smooth">
      <body className={`antialiased ${roboto.className}`}>
        <AuthProvider initialUser={user}>
          <FavoritesProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </FavoritesProvider>
        </AuthProvider>
        <Loader />
      </body>
    </html>
  );
}
