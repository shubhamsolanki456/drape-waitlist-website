"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shirt,
  Sparkles,
  Camera,
  Bookmark,
  Globe,
  Wand2,
} from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "Digital Wardrobe",
    description:
      "Upload your entire closet. Every piece, every color, every fabric — organized and accessible from any device, anywhere in the world.",
  },
  {
    icon: Sparkles,
    title: "AI Outfit Crafting",
    description:
      "Tell DRAPE the occasion, mood, or vibe. Our AI curates the perfect outfit from your wardrobe — no more standing in front of the closet wondering what to wear.",
  },
  {
    icon: Camera,
    title: "Virtual Try-On",
    description:
      "Upload your photo and any garment. DRAPE generates a photorealistic image of you wearing it. See how it looks before you buy or wear it out.",
  },
  {
    icon: Bookmark,
    title: "Save & Collect",
    description:
      "Love an outfit? Save it to your collection. Build lookbooks for different seasons, events, and moods. Your style, curated by you.",
  },
  {
    icon: Globe,
    title: "Access Anywhere",
    description:
      "Your wardrobe lives in the cloud. Traveling? Shopping? Planning? Your entire closet is just a tap away, no matter where you are.",
  },
  {
    icon: Wand2,
    title: "Style Evolution",
    description:
      "Track your style journey. See what you wear most, discover gaps in your wardrobe, and get smart recommendations to elevate your look.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="liquid-glass rounded-3xl p-8 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
          <Icon size={24} className="text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3">
          {feature.title}
        </h3>
        <p className="text-drape-text-muted leading-relaxed text-sm">
          {feature.description}
        </p>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-32 px-6" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.015] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs text-drape-text-dim uppercase tracking-[0.2em] mb-4 block">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Everything You Need
            <br />
            <span className="shimmer-text">To Own Your Style</span>
          </h2>
          <p className="text-drape-text-muted max-w-xl mx-auto text-lg">
            DRAPE combines cutting-edge AI with intuitive design to transform
            how you interact with your wardrobe.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {features.map((feature, i) => {
            const spanClass = 
              i === 0 ? "md:col-span-1 lg:col-span-1 lg:row-span-1" : 
              i === 1 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" :
              i === 2 ? "md:col-span-1 lg:col-span-1 lg:row-span-1" :
              i === 3 ? "md:col-span-1 lg:col-span-1 lg:row-span-1" :
              i === 4 ? "md:col-span-2 lg:col-span-2 lg:row-span-1" : 
              "md:col-span-2 lg:col-span-3 lg:row-span-1";
              
            return (
              <div key={feature.title} className={spanClass}>
                <FeatureCard feature={feature} index={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
