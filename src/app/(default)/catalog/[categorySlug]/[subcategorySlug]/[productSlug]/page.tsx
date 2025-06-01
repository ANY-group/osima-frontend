import Breadcrumbs from "@/app/components/breadcrumbs";
import ProductInfo from "./components/product-info";
import ProductsCarousel from "../../../components/products-carousel";
import SubscribeForm from "@/app/components/subscribe-form";
import fetchProduct from "@/lib/catalog/usecases/fetch-product";
import fetchRecommendations from "@/lib/catalog/usecases/fetch-recommendations";

export default async function ProductPage({ params }: {
  params: Promise<{
    categorySlug: string,
    subcategorySlug: string,
    productSlug: string,
  }>,
}) {
  const { categorySlug, subcategorySlug, productSlug } = (await params);

  const [product, recommendations] = await Promise.all([
    fetchProduct(productSlug, subcategorySlug, categorySlug),
    fetchRecommendations(productSlug, subcategorySlug, categorySlug),
  ]);

  return (
    <main>
      <section className="layout-container">
        <Breadcrumbs items={[
          {
            label: 'Каталог',
            href: '/catalog',
          },
          {
            label: product.subcategory.category?.name || '',
            href: `/catalog/${product.subcategory.category?.slug}`,
          },
          {
            label: product.subcategory.name,
            href: `/catalog/${product.subcategory.category?.slug}/${product.subcategory.slug}`,
          },
          {
            label: product.name,
            href: null,
          },
        ]} />
      </section>
      <section className="layout-container">
        <ProductInfo product={product} />
      </section>
      <section>
        {/* TODO: Reviews */}
      </section>
      <section className="my-5 md:my-10">
        <ProductsCarousel title="Рекомендуем также" products={recommendations} />
      </section>
      <section>
        <SubscribeForm />
      </section>
    </main>
  );
}
