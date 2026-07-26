"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative text-center min-h-screen px-8 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
        <div className="max-w-[900px] pt-24 lg:pt-32">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-sm
              px-4
              py-2
              text-sm
              tracking-[0.2em]
              text-white/60
            "
          >
            SOFTWARE • AI • AUTOMATION
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="
              mt-8
              text-white
              font-semibold
              tracking-[-0.06em]
              
              text-6xl
              md:text-7xl
              lg:text-[76px]
              leading-20
            "
          >
            Building Intelligent
            <br />
            Software For Growing
            <br />
            Businesses
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              mt-8
              max-w-[620px]
              pl-30
              text-lg
              md:text-xl
              leading-relaxed
              text-white/60
            "
          >
            We design scalable software, automate business workflows,
            and implement AI solutions that help organizations improve
            efficiency, accelerate growth, and stay competitive.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <button
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-[#0E6F9B]
                px-8
                py-4
                text-white
                font-medium
                transition-all
                hover:bg-[#0c6288]
                hover:-translate-y-1
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
                bg-white/5
                px-8
                py-4
                text-white
                backdrop-blur-sm
                transition-all
                hover:bg-white/10
              "
            >
              Book a Call
            </button>
          </motion.div>

          {/* Small trust text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="
              mt-16
              flex
              flex-wrap
              gap-6
              
            "
          >
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}