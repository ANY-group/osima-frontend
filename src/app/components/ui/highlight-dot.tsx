export default function HighlightDot({
  className,
}: {
  className?: string,
}) {
  return (
    <div className={`absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full bg-success ${className}`}></div>
  );
}