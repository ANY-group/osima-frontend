export default function ProductPrice({ alt = false, }: {
  alt?: boolean,
}) {
  return (
    <div className="flex items-center gap-2 font-semibold tracking-tight">
      <span>16 515 C</span>
      <span className={`${alt ? 'text-text-secondary-alt text-sm' : 'text-text-secondary'}`}>
        16 520<span className="line-through"> C</span>
      </span>
    </div>
  );
}