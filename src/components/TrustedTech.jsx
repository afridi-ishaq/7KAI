"use client";

import { motion } from "framer-motion";

const tech = [
  "Next.js",
  "OpenAI",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Stripe",
];

export default function TrustedTech() {
  return (
    <section className="py-24 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-200 mb-10">
          Trusted Technologies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {tech.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="
              text-center
              text-lg
              font-semibold
              text-slate-400
            "
            >
              {item}
            </motion.div>
          ))}
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="
              mt-16
              flex
              flex-wrap
              gap-x-8
              gap-y-4
              text-sm
              uppercase
              tracking-wider
              text-white
              pb-15
            "
          >
            <span>Next.js</span>
            <span>OpenAI</span>
            <span>AWS</span>
            <span>MongoDB</span>
            <span>PostgreSQL</span>
            <span>Stripe</span>
          </motion.div>
        <div
        className="
          absolute
          bottom-0
          left-0
          h-40
          w-full
          bg-gradient-to-t
          from-gray-900
          to-transparent
          pointer-events-none
        "
      />
      </div>
    </section>
  );
}