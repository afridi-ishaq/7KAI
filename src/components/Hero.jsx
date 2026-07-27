"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ElectricBorder from "./ElectricBorder";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-[1000px] mx-auto pt-24 lg:pt-32 flex flex-col items-center text-center">

          {/* Eyebrow Badge */}
          <div className="flex pt-20 justify-center">
            <ElectricBorder
              color="#7cf2fb"
              speed={1.1}
              chaos={0.03}
              thickness={2}
              style={{
                borderRadius: 9999,
                width: "fit-content",
              }}
            >
              
              <div className="px-4 py-2 rounded-3xl min-w-[380px] flex items-center justify-center gap-2">
                
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-400"
                    animate={{
                      scale: [ 1, 1.6],
                      opacity: [0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative w-2 h-2 rounded-full bg-green-400" />
                </div>

                <p className="text-sm md:text-base tracking-[0.35em] uppercase text-white">
                  Software • AI • Automation
                </p>
              </div>
            </ElectricBorder>
          </div>

          {/* Heading */}
          <h1
            className="
    mt-10
    text-white
    font-semibold
    tracking-[-0.06em]
    text-6xl
    md:text-7xl
    lg:text-[84px]
    leading-[0.92]
  "
          >
            Building{" "}
            <span
              className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-sky-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
            >
              Intelligent
            </span>
            <br />
            Software That Helps
            <br />
            Businesses Grow
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              mt-8
              max-w-[700px]
              text-lg
              md:text-xl
              leading-relaxed
              text-white/70
            "
          >
            We build scalable software, automate workflows, and implement
            AI-powered solutions that help businesses operate more efficiently,
            accelerate growth, and stay ahead of the competition.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="
              mt-12
              flex
              flex-wrap
              justify-center
              items-center
              gap-4
            "
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
                duration-300
                hover:bg-[#0c6288]
                hover:-translate-y-1
              "
            >
              <a href="#contact">Start a Project</a>

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
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
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/10
                hover:border-white/20
              "
            >
             <a href="#work"> View Our Work</a>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="
              mt-16
              flex
              flex-wrap
              justify-center
              gap-8
              text-sm
              uppercase
              tracking-wider
              text-white/40
            "
          >
            <span>Custom Software</span>
            <span>AI Solutions</span>
            <span>Workflow Automation</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}