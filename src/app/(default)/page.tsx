import InfoLinks from "../components/info-links";
import ProductsCarousel from "./catalog/components/products-carousel";
import HomeAddresses from "./home/components/home-addresses";
import HomeBanners from "./home/components/home-banners";
import HomePartners from "./home/components/home-partners";
import HomeSocials from "./home/components/home-socials";
import HomePosts from "./home/components/home-posts";
import fetchCatalog from "@/lib/catalog/usecases/fetch-catalog";

export default async function HomePage() {

  const [saleCatalog, bestsellerCatalog, newCatalog] = await Promise.all([
    fetchCatalog({ appliedFilters: { sale: '1' }, randomKey: 10 * (new Date()).getHours() }),
    fetchCatalog({ appliedFilters: { new: '1' }, randomKey: 20 * (new Date()).getHours() }),
    fetchCatalog({ appliedFilters: { bestseller: '1' }, randomKey: 30 * (new Date()).getHours() }),
  ]);

  return (
    <main>
      <section className="layout-container">
        <HomeBanners />
      </section>
      <section className="my-5 md:my-10">
        <ProductsCarousel title="Акции" products={saleCatalog.products} link="/catalog?sale=1" />
      </section>
      <section className="my-5 md:my-10">
        <ProductsCarousel title="Бестселлеры" products={bestsellerCatalog.products} link="/catalog?bestseller=1" />
      </section>
      <section className="my-5 md:my-10">
        <ProductsCarousel title="Новинки" products={newCatalog.products} link="/catalog?new=1" />
      </section>
      <section className="bg-primary-muted">
        <div className="layout-container">
          <HomePosts />
        </div>
      </section>
      <section>
        <HomeSocials />
      </section>
      <section className="layout-container">
        <HomePartners />
      </section>
      <section>
        <HomeAddresses />
      </section>
      <section className="layout-container py-8">
        <InfoLinks />
      </section>
    </main>
  );
}
