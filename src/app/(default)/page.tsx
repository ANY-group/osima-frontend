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
    fetchCatalog(undefined, undefined, undefined, { sale: 1 }),
    fetchCatalog(undefined, undefined, undefined, { new: 1 }),
    fetchCatalog(undefined, undefined, undefined, { bestseller: 1 }),
  ]);

  return (
    <main>
      <section className="layout-container">
        <HomeBanners />
      </section>
      <section>
        <ProductsCarousel title="Акции" products={saleCatalog.products} link="/catalog?filters[sale]=1" />
      </section>
      <section>
        <ProductsCarousel title="Бестселлеры" products={bestsellerCatalog.products} link="/catalog?filters[bestseller]=1" />
      </section>
      <section>
        <ProductsCarousel title="Новинки" products={newCatalog.products} link="/catalog?filters[new]=1" />
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
