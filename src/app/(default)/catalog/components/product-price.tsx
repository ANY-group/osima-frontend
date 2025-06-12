import { formatNumber } from "@/lib/utils/helpers";

export default function ProductPrice({ price, oldPrice = null, alt = false, }: {
  price: number,
  oldPrice?: number | null,
  alt?: boolean,
}) {
  return (
    <div className="flex items-center gap-2 font-semibold tracking-tight whitespace-nowrap">
      <span>{formatNumber(price)} ₸</span>
      {oldPrice && (
        <span className={`${alt ? 'text-text-secondary-alt text-sm' : 'text-text-secondary'}`}>
          {formatNumber(oldPrice)}<span className="line-through"> ₸</span>
        </span>
      )}
    </div>
  );
}