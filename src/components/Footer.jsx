"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              7KAI
            </h2>

            <p className="mt-6 max-w-md text-white/60 text-lg leading-relaxed">
              Software Engineering & AI Transformation Partner.
              Building scalable software, automation systems,
              and digital experiences for modern businesses.
            </p>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <p className="text-white/40 uppercase tracking-[0.2em] text-sm">
                Navigation
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <a href="#home" className="hover:text-[#66FFFF] transition">
                  Home
                </a>
                <a href="#services" className="hover:text-[#66FFFF] transition">
                  Services
                </a>
                <a href="#FeaturedProjects" className="hover:text-[#66FFFF] transition">
                  Projects
                </a>
                <a href="#Contact" className="hover:text-[#66FFFF] transition">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className="text-white/40 uppercase tracking-[0.2em] text-sm">
                Connect
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-[#66FFFF] transition"
                >
                  LinkedIn
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-[#66FFFF] transition"
                >
                  GitHub
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="mailto:hello@7kai.com"
                  className="hover:text-[#66FFFF] transition"
                >
                  hello@7kai.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-white/40">
            © 2026 7KAI. All rights reserved.
          </p>

          <p className="text-white/40">
            Designed & Developed by 7KAI
          </p>
        </div>
      </div>
    </footer>
  );
}