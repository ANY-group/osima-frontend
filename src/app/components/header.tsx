import TopHeader from "./top-header";
import MidHeader from "./mid-header";
import BotHeader from "./bot-header";

export default function Header() {
  return (
    <div className="relative h-18 md:h-auto">
      <header className="fixed md:relative top-0 left-0 right-0 w-full z-20">
        <TopHeader />
        <MidHeader />
        <BotHeader />
      </header>
    </div>
  );
}