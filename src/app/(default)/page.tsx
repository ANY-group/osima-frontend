import InfoLinks from "../components/info-links";
import ProductsCarousel from "./catalog/components/products-carousel";
import HomeAddresses from "./home/components/home-addresses";
import HomeBanners from "./home/components/home-banners";
import HomePartners from "./home/components/home-partners";
import HomeSocials from "./home/components/home-socials";
import HomePosts from "./home/components/home-posts";

export default function HomePage() {
  return (
    <main>
      <section className="layout-container">
        <HomeBanners />
      </section>
      <section>
        <ProductsCarousel title="Акции" />
      </section>
      <section>
        <ProductsCarousel title="Бестселлеры" />
      </section>
      <section>
        <ProductsCarousel title="Новинки" />
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
