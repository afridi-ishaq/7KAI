export default function SectionHeading({
  badge,
  title,
  description,
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {badge && (
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-medium text-[#0E6F9B]">
          {badge}
        </div>
      )}

      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0F172A]">
        {title}
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        {description}
      </p>
    </div>
  );
}