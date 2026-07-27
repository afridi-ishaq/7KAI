"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const solutions = [
  {
    id: 1,
    tab: "Software",
    title: "Custom Software Development",
    description:
      "Build scalable web applications, internal platforms, and SaaS products tailored to your business needs.",
    features: [
      "Next.js Applications",
      "Custom Dashboards",
      "Enterprise Systems",
    ],
  },
  {
    id: 2,
    tab: "AI",
    title: "AI & Automation",
    description:
      "Automate repetitive workflows and integrate AI into your operations for greater efficiency.",
    features: [
      "AI Agents",
      "Workflow Automation",
      "Document Processing",
    ],
  },
  {
    id: 3,
    tab: "Cloud",
    title: "Cloud Infrastructure",
    description:
      "Deploy secure and scalable applications with modern cloud architecture.",
    features: [
      "AWS Deployment",
      "CI/CD Pipelines",
      "Monitoring & Scaling",
    ],
  },
  {
    id: 4,
    tab: "Automation",
    title: "Business Optimization",
    description:
      "Improve business processes with automation and custom digital solutions.",
    features: [
      "Process Mapping",
      "Workflow Analysis",
      "Custom Integrations",
    ],
  },
];

export default function SolutionsShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section
    id="solutions"
    className="bg-[#F8FAFC] py-32">
      
      <div className="max-w-7xl mx-auto px-6 text-center lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm">
            HOW WE HELP
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-semibold text-[#0F172A] tracking-tight">
            Solutions Built
            <br />
            For Growth
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {solutions.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              className={`
                px-6 py-3 rounded-full transition-all
                ${
                  active === index
                    ? "bg-[#0E6F9B] text-white"
                    : "bg-white text-slate-600 border border-slate-200"
                }
              `}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-4xl font-semibold text-[#0F172A]">
                {solutions[active].title}
              </h3>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                {solutions[active].description}
              </p>

              <div className="mt-8 space-y-4">
                {solutions[active].features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <Check size={18} className="text-[#0FA38E]" />
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className="
                  mt-10
                  flex
                  items-center
                  gap-2
                  bg-[#0E6F9B]
                  text-white
                  px-7
                  py-4
                  rounded-full
                "
              >
                Start Project
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Right */}
          <motion.div
            key={`image-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              h-[500px]
              rounded-[32px]
              bg-white
              border
              border-slate-200
              shadow-xl
              flex
              items-center
              justify-center
            "
          >
            <span className="text-slate-400 text-lg">
              Screenshot / Product Mockup
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}