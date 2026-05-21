"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const words = [
  "DIGITAL WARDROBE",
  "AI STYLIST",
  "VIRTUAL TRY-ON",
  "OUTFIT CRAFTING",
  "STYLE EVOLUTION",
  "CLOUD CLOSET",
  "FASHION AI",
  "PERSONAL STYLE",
];

export default function Marquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 overflow-hidden border-y border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* First Row - Left to Right */}
        <div className="flex whitespace-nowrap mb-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-8"
          >
            {[...words, ...words, ...words, ...words].map((word, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/5 uppercase tracking-tight flex items-center gap-8"
              >
                {word}
                <span className="w-3 h-3 rounded-full bg-white/20 inline-block" />
              </span>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-8"
          >
            {[...words, ...words, ...words, ...words].reverse().map((word, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/[0.03] uppercase tracking-tight flex items-center gap-8"
              >
                {word}
                <span className="w-3 h-3 rounded-full bg-white/10 inline-block" />
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
