export default function ErrorText({ error }: {
  error?: string | string[] | null,
}) {
  if (Array.isArray(error)) {
    error = error.join(' ');
  }

  return error && (
    <p className="text-danger text-xs sm:text-sm mt-1">
      {error}
    </p>
  );
}