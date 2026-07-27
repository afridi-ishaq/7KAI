"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Job Portal Platform",
    description:
      "A modern recruitment platform designed to connect employers and candidates through an intuitive experience.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "AI Automation Dashboard",
    description:
      "Automation workflows and AI-powered processes for operational efficiency.",
    tags: ["OpenAI", "Next.js", "PostgreSQL"],
  },
  {
    title: "Business Analytics Platform",
    description:
      "A centralized dashboard providing actionable insights through real-time analytics.",
    tags: ["React", "Node.js", "Charts"],
  },
];

export default function FeaturedProjects() {
  return (
    <section
    id="work"
    className="bg-[#F8FAFC] py-18">
      <div className="max-w-7xl text-center mx-auto px-6 lg:px-10">
        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-slate-500 text-sm">
            Selected Work
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-semibold text-[#0F172A] tracking-tight">
            Projects That Deliver
            <br />
            Real Business Value
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div
                className="
                  rounded-[32px]
                  bg-white
                  border
                  border-slate-200
                  h-[420px]
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  overflow-hidden
                  group
                "
              >
                <div
                  className="
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                    text-slate-400
                    text-lg
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                >
                  Project Screenshot
                </div>
              </div>

              <div>
                <span className="text-slate-400 text-sm">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-4xl font-semibold text-[#0F172A]">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-white
                        border
                        border-slate-200
                        text-sm
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="
                    mt-10
                    flex
                    items-center
                    gap-2
                    text-[#0E6F9B]
                    font-medium
                  "
                >
                  View Project
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}