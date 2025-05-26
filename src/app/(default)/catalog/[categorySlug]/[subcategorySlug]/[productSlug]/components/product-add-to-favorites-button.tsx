import HeartOutlinedIcon from "@/app/components/ui/icons/heart-outlined-icon";
import { ProductEntity } from "@/lib/catalog/types/product";

export default function ProductAddToFavoritesButton({ product }: {
  product: ProductEntity,
}) {
  return (
    <button className="flex items-center justify-center h-full aspect-square rounded-lg bg-secondary-muted" aria-label="Добавить в избранные">
      <HeartOutlinedIcon />
    </button>
  );
} 