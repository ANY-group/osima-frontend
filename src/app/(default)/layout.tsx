import fetchCategories from "@/lib/catalog/usecases/fetch-categories";
import Footer from "../components/footer";
import Header from "../components/header";
import CategoriesProvider from "./catalog/components/controllers/categories-provider";

export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const categories = await fetchCategories();

  return (
    <div className="min-h-lvh">
      <CategoriesProvider categories={categories}>
        <Header />
        {children}
        <Footer />
      </CategoriesProvider>
    </div>
  );
}
