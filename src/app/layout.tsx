import type { Metadata } from "next";
import { Roboto_Flex } from 'next/font/google'
import "./globals.css";
import Loader from "./components/ui/loader";
import AuthProvider from "./(footerless)/profile/components/controllers/auth-provider";
import fetchUser from "@/lib/auth/usecases/fetch-user";
import CartProvider from "./(default)/checkout/components/controllers/cart-provider";
import FavoritesProvider from "./(default)/catalog/favorites/components/controllers/favorites-provider";
import CategoriesProvider from "./(default)/catalog/(catalog)/components/controllers/categories-provider";
import fetchCategories from "@/lib/catalog/usecases/fetch-categories";

const roboto = Roboto_Flex({
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Osima",
  description: "КОРЕЙСКАЯ КОСМЕТИКА",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, categories] = await Promise.all([
    await fetchUser().catch(() => null),
    fetchCategories(),
  ]);


  return (
    <html lang="ru" className="md:bg-foreground scroll-smooth">
      <body className={`antialiased ${roboto.className}`}>
        <CategoriesProvider categories={categories}>
          <AuthProvider initialUser={user}>
            <FavoritesProvider>
              <CartProvider>
                {children}
              </CartProvider>
            </FavoritesProvider>
          </AuthProvider>
        </CategoriesProvider>
        <Loader />
      </body>
    </html>
  );
}
