import StarIcon from "@/app/components/ui/icons/star-icon";

export default function StarRating() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        <span>
          <StarIcon />
        </span>
        <span>
          <StarIcon />
        </span>
        <span>
          <StarIcon />
        </span>
        <span>
          <StarIcon />
        </span>
        <span className="text-text-secondary">
          <StarIcon />
        </span>
      </div>
      <span className="text-sm">16</span>
    </div>
  );
}