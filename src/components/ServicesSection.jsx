import {
  Bot,
  Globe,
  Workflow,
  Database,
  Cloud,
  Code2,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: "AI Automation",
      desc: "Automate repetitive workflows and increase operational efficiency.",
    },
    {
      icon: Globe,
      title: "Web Applications",
      desc: "Modern responsive platforms built for growth and performance.",
    },
    {
      icon: Workflow,
      title: "Business Systems",
      desc: "Custom internal tools and process automation solutions.",
    },
    {
      icon: Database,
      title: "Data Solutions",
      desc: "Data architecture, integrations, and analytics platforms.",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      desc: "Scalable cloud deployments and optimization services.",
    },
    {
      icon: Code2,
      title: "Custom Development",
      desc: "Tailored software solutions built around your business needs.",
    },
  ];

  return (
    <section
      id="services"
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Services"
          title="Solutions Designed For Growth"
          description="Helping businesses scale through software engineering, automation, and digital transformation."
        />

        <div className="mt-20 px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  rounded-3xl
                "
              >
                {/* Glow Layer */}
                <div
                  className="
                    absolute
                    -inset-[1px]
                    rounded-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    blur-xl
                    bg-gradient-to-r
                    from-cyan-500/25
                    via-blue-500/20
                    to-emerald-500/25
                  "
                />

                {/* Card */}
                <div
                  className="
                    relative
                    h-full
                    rounded-3xl
                    border
                    border-slate-200
                    bg-[#F8FAFC]
                    p-8
                    transition-all
                    duration-300
                    group-hover:-translate-y-2
                    group-hover:border-cyan-200
                    group-hover:shadow-2xl
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-r
                      from-[#0E6F9B]
                      to-[#0FA38E]
                      text-white
                    "
                  >
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-bold
                      text-[#0F172A]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      leading-relaxed
                      text-slate-600
                    "
                  >
                    {service.desc}
                  </p>

                  {/* Hover Arrow */}
                  <div
                    className="
                      mt-6
                      text-[#0E6F9B]
                      font-medium
                      opacity-0
                      translate-y-2
                      transition-all
                      duration-300
                      group-hover:opacity-100
                      group-hover:translate-y-0
                    "
                  >
                    Learn More →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}