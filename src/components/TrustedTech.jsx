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
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="
              text-sm
              uppercase
              tracking-[0.35em]
              text-cyan-400
            "
          >
            Our Technology Stack
          </p>

          <h2
            className="
              mt-6
              text-4xl
              md:text-5xl
              font-semibold
              text-white
              tracking-tight
            "
          >
            Built With Modern Technologies
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-lg
              text-white/60
              leading-relaxed
            "
          >
            We leverage industry-leading technologies to build
            scalable software, intelligent AI systems, and reliable
            business automation solutions.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div
          className="
            mt-16
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-6
            lg:px-20
            md:px-10
          "
        >
          {tech.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                p-6
                text-center
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-white/[0.08]
              "
            >
              <span
                className="
                  text-white
                  font-medium
                  text-lg
                "
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-20
            flex
            flex-wrap
            justify-center
            gap-10
            text-white/60
            text-sm
            uppercase
            tracking-wider
          "
        >
          <span>Custom Software</span>
          <span>AI Solutions</span>
          <span>Cloud Infrastructure</span>
          <span>Automation Systems</span>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-40
          w-full
          bg-gradient-to-t
          from-cyan-500/5
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
}