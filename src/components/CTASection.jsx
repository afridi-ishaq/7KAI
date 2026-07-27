"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
    id="contact"
    className="bg-[#0F172A] py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl flex justify-center px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-sm
            p-10
            md:p-16
            lg:p-20
          "
        >
          <p
            className="
              uppercase
              tracking-[0.3em]
              text-white/40
              text-sm
            "
          >
            Get Started
          </p>

          <h2
            className="
              mt-8
              text-white
              font-semibold
              leading-[0.95]
              tracking-[-0.05em]
              text-4xl
              md:text-7xl
              lg:text-[56px]
              max-w-5xl
            "
          >
            Let's Build Something
            <br />
            Exceptional.
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              md:text-xl
              leading-relaxed
              text-white/60
            "
          >
            Whether you need custom software, AI automation,
            cloud infrastructure, or digital transformation,
            we can help bring your vision to life.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-white
                text-[#0F172A]
                px-8
                py-4
                font-medium
                transition-all
                hover:scale-[1.02]
              "
            >
              Start a Project

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </button>

            <button
              className="
                rounded-full
                border
                border-white/10
                px-8
                py-4
                text-white
                transition-all
                hover:bg-white/5
              "
            >
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}