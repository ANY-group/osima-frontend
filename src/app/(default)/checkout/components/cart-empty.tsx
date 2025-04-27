import Link from "@/app/components/ui/link";

export default function CartEmpty() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full min-h-42">
      <p className="text-xl font-bold">
        В корзине пока ничего нет :(
      </p>
      <Link
        href="/catalog"
        className="max-w-50 w-full py-3 rounded-lg bg-success text-success-foreground text-center text-xs font-bold uppercase"
      >
        Начать покупки
      </Link>
    </div>
  );
}