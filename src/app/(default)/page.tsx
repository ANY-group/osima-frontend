import ProductsCarousel from "../components/products-carousel";
import HomeBanners from "./home/components/home-banners";

export default function HomePage() {
  return (
    <main>
      <div className="layout-container">
        <HomeBanners />
      </div>
      <ProductsCarousel title="Акции" />
      <ProductsCarousel title="Бестселлеры" />
      <ProductsCarousel title="Новинки" />
    </main>
  );
}
