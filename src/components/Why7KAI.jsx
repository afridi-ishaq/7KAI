"use client";

import { motion } from "framer-motion";

export default function Why7KAI() {
  return (
    <section className="relative bg-[#F8FAFC] text-[#0F172A] py-18 lg:py-18 lg:px-15 text-center overflow-hidden">
      {/* Background Accent */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#0E6F9B]/5
          blur-[120px]
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-slate-500
          "
        >
          WHY 7KAI
        </motion.p>

        {/* Big Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-10
            max-w-5xl
            text-5xl
            md:text-7xl
            lg:text-[72px]
            font-semibold
            leading-[0.95]
            tracking-[-0.05em]
          "
        >
          We build software,
          <br />
          AI systems, and
          <br />
          automation platforms
          <br />
          that drive growth.
        </motion.h2>

        {/* Bottom Grid */}
        <div className="mt-24 grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-slate-400 text-sm">01</span>

            <h3 className="mt-4 text-2xl font-semibold">
              Engineering First
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Every solution is built on solid engineering
              principles, ensuring reliability, maintainability,
              and performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-slate-400 text-sm">02</span>

            <h3 className="mt-4 text-2xl font-semibold">
              Business Focused
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Technology only matters when it creates measurable
              business outcomes and improves operational efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-slate-400 text-sm">03</span>

            <h3 className="mt-4 text-2xl font-semibold">
              Built For Scale
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We create systems designed to grow alongside your
              business without unnecessary complexity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}