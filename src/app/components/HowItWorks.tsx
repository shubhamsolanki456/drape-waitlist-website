"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Brain, Eye, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Wardrobe",
    description:
      "Snap photos of your clothes or import them in bulk. DRAPE automatically categorizes everything — tops, bottoms, shoes, accessories — with AI-powered tagging.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Set the Vibe",
    description:
      "Heading to a business meeting? A casual brunch? A night out? Tell DRAPE the occasion, weather, or mood, and watch the magic happen.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Virtual Try-On",
    description:
      "See exactly how each outfit looks on you. Upload your photo, select garments, and DRAPE generates a realistic image of you wearing the complete look.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Save & Share",
    description:
      "Love what you see? Save outfits to your personal collection, create lookbooks, and share your style with friends or on social media.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative py-32 px-6 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-xs text-drape-text-dim uppercase tracking-[0.2em] mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Four Steps to
            <br />
            <span className="shimmer-text">Effortless Style</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    isEven ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`liquid-glass rounded-3xl p-8 inline-block max-w-lg ${
                      isEven ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        isEven ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="text-4xl font-bold text-white/10">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon size={18} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-drape-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-drape-black" />
                </div>

                {/* Spacer for other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
