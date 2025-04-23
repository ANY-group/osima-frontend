import Breadcrumbs from "@/app/components/breadcrumbs";
import ProductInfo from "./components/product-info";
import ProductsCarousel from "../../../components/products-carousel";

export default function ProductPage() {
  return (
    <main>
      <section className="layout-container">
        <Breadcrumbs items={[
          {
            label: 'Каталог',
            href: '#',
          },
          {
            label: 'Уход за лицом',
            href: '#',
          },
          {
            label: 'Тонизирование',
            href: '#',
          },
          {
            label: 'Тоник skin balancing pore reducing toner(Paulas Choice)',
            href: null,
          },
        ]} />
      </section>
      <section className="layout-container">
        <ProductInfo />
      </section>
      <section>
        {/* TODO: Reviews */}
      </section>
      <section>
        <ProductsCarousel title="Рекомендуем также" />
      </section>
    </main>
  );
}
