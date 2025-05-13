import TopHeader from "./top-header";
import MidHeader from "./mid-header";
import BotHeader from "./bot-header";
import fetchCategories from "@/lib/catalog/usecases/fetch-categories";

export default async function Header() {
  const categories = await fetchCategories();

  return (
    <div className="relative h-18 md:h-auto">
      <header className="fixed md:relative top-0 left-0 right-0 w-full z-20">
        <TopHeader />
        <MidHeader categories={categories} />
        <BotHeader categories={categories} />
      </header>
    </div>
  );
}