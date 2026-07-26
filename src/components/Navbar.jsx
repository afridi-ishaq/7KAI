"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
          mt-5
          flex
          items-center
          justify-between
          px-6
          py-4
          rounded-full
          border
          border-slate-200/80
          bg-white/70
          backdrop-blur-xl
          shadow-sm
        "
        >
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            7KAI
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-slate-900">
              Services
            </a>

            <a href="#work" className="text-slate-600 hover:text-slate-900">
              Work
            </a>

            <a href="#process" className="text-slate-600 hover:text-slate-900">
              Process
            </a>
          </nav>

          <button
            className="
            bg-[#0E6F9B]
            hover:bg-[#0c6288]
            text-white
            px-5
            py-2.5
            rounded-full
            transition
          "
          >
            Book a Call
          </button>
        </div>
      </div>
    </motion.header>
  );
}