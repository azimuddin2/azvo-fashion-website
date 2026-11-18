"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F5EFE8] px-6 text-[#1C1C1C]">

      {/* Background Decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute h-[500px] w-[500px] rounded-full border border-[#8C7355]"
      />

      {/* Welcome */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-3 text-xl tracking-[0.5em] uppercase text-[#8C7355] md:text-2xl"
      >
        Welcome To
      </motion.h2>

      {/* Brand Name */}
      <motion.h1
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-7xl font-black tracking-[0.12em] md:text-9xl"
      >
        AZVO
      </motion.h1>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="my-6 h-[2px] bg-[#8C7355]"
      />

      {/* Tagline */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center text-sm font-medium uppercase tracking-[0.3em] md:text-xl"
      >
        Fashion Made for Men
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="mt-6 max-w-xl text-center text-sm leading-8 text-[#6B6259] md:text-lg"
      >
        We bring you a new standard of men's fashion,
        where confidence, simplicity, and style come together.
      </motion.p>

      {/* Bottom Label */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-8 text-[10px] tracking-[0.4em] text-[#8C7355]"
      >
        EST. NOVEMBER 2026 · PREMIUM MENSWEAR
      </motion.span>
    </main>
  );
}
