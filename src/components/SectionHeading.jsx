export default function SectionHeading({
  badge,
  title,
  description,
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {badge && (

        <div className="flex justify-center">
          <div className="relative p-[1px] rounded-full overflow-hidden group">

            {/* Animated Gradient Border */}
            <div
              className="
          absolute inset-0
          rounded-full
          bg-[linear-gradient(90deg,#22d3ee,#3b82f6,#8b5cf6,#22d3ee)]
          bg-[length:300%_300%]
          animate-[gradient_6s_linear_infinite]
        "
            />

            {/* Content */}
            <div
              className="
          relative
          px-5
          py-2.5
          rounded-full
          bg-[#0f172a]
          text-sm
          font-medium
          uppercase
          tracking-[0.25em]
          text-cyan-300
          backdrop-blur-xl
        "
            >
              
              {badge}
            </div>
          </div>
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