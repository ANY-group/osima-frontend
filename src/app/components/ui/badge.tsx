export default function Badge({ children }: {
  children: React.ReactNode,
}) {
  return (
    <div className="absolute -right-2 -top-2 inline-flex items-center justify-center p-1.5 rounded-full border border-background bg-success text-xs font-semibold leading-0 min-w-5 min-h-5">
      {children}
    </div>
  );
}