import ProductsCarousel from "../components/products-carousel";
import HomeBanners from "./home/components/home-banners";

export default function HomePage() {
  return (
    <main>
      <div className="layout-container">
        <HomeBanners />
      </div>
      <div className="layout-container">
        <ProductsCarousel title="Акции" />
      </div>
      <div className="layout-container">
        <ProductsCarousel title="Бестселлеры" />
      </div>
      <div className="layout-container">
        <ProductsCarousel title="Новинки" />
      </div>
    </main>
  );
}
