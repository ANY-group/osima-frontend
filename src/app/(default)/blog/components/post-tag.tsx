import TagEntity from "@/lib/blog/types/tag";

export default function PostTag({ tag }: {
  tag: TagEntity,
}) {
  return (
    <div className="px-4 py-2 rounded-full bg-primary-muted text-xs text-on-primary-muted">
      {tag.name}
    </div>
  );
}