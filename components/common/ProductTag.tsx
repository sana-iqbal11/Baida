type ProductTagProps = {
  label: string;
};

export default function ProductTag({ label }: ProductTagProps) {
  return (
    <span className="inline-flex rounded-full bg-gold/90 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white">
      {label}
    </span>
  );
}