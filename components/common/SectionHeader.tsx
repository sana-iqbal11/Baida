type SectionHeaderProps = {
  tag: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  tag,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gold">
        {tag}
      </p>

      <h2 className="text-4xl md:text-6xl font-light text-dark">
        {title}
      </h2>

      <div className="mt-4 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gold"></span>
        <span className="text-gold text-sm">✦</span>
        <span className="h-px w-12 bg-gold"></span>
      </div>

      {description && (
        <p className="mt-5 text-brown">
          {description}
        </p>
      )}
    </div>
  );
}