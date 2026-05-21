"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32">
      {/* Radial glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-2xl pointer-events-none float-animation" />
      <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-white/[0.02] blur-2xl pointer-events-none float-animation-delayed" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 liquid-glass rounded-full px-5 py-2.5 mb-10"
        >
          <Sparkles size={14} className="text-white" />
          <span className="text-sm text-drape-text-muted">
            The Future of Personal Style
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.95] tracking-tighter mb-8"
        >
          <span className="block text-white">Your Wardrobe,</span>
          <span className="block shimmer-text">Reimagined.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-drape-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Digitize your entire closet. Craft perfect outfits with AI. Try on
          anything virtually. Access your style from anywhere in the world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#waitlist">
            <button className="clay-btn text-base">
              Join the Waitlist
            </button>
          </a>
          <a href="#features">
            <button className="liquid-glass text-white px-8 py-4 rounded-2xl font-medium text-base hover:bg-white/10 transition-all duration-300">
              Explore Features
            </button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "2K+", label: "Waitlist" },
            { value: "∞", label: "Outfits" },
            { value: "100%", label: "Virtual" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-drape-text-dim uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
