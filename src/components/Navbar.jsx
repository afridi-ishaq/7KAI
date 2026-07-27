"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            h-16
            px-6
            rounded-full
            bg-white/70
            backdrop-blur-xl
            border
            border-slate-200/60
            shadow-[0_8px_40px_rgba(15,23,42,0.08)]
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="
              text-lg
              font-semibold
              tracking-tight
              text-[#0F172A]
            "
          >
            7KAI
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-[15px]
                  text-slate-600
                  hover:text-slate-900
                  transition
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            className="
              hidden md:flex
              items-center
              gap-2
              bg-[#0F172A]
              text-white
              px-5
              py-2.5
              rounded-full
              text-sm
              hover:translate-y-[-1px]
              transition-all
            "
          >
            Book a Call
            <ArrowUpRight size={16} />
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-900"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="
                md:hidden
                mt-3
                rounded-3xl
                bg-white/90
                backdrop-blur-xl
                border
                border-slate-200
                p-6
                shadow-xl
              "
            >
              <div className="flex flex-col gap-5">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
                      text-slate-700
                      hover:text-slate-900
                    "
                  >
                    {link.label}
                  </a>
                ))}

                <button
                  className="
                    mt-2
                    bg-[#0F172A]
                    text-white
                    rounded-full
                    py-3
                  "
                >
                  Book a Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}