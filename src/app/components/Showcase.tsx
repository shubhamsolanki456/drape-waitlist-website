"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shirt, Sparkles, Camera, Heart } from "lucide-react";

const showcaseItems = [
  {
    icon: Shirt,
    title: "Digital Closet",
    subtitle: "Every piece, organized",
    position: "top-0 left-0",
    delay: 0,
  },
  {
    icon: Sparkles,
    title: "AI Stylist",
    subtitle: "Outfits crafted for you",
    position: "top-12 right-0",
    delay: 0.15,
  },
  {
    icon: Camera,
    title: "Virtual Try-On",
    subtitle: "See before you wear",
    position: "bottom-12 left-8",
    delay: 0.3,
  },
  {
    icon: Heart,
    title: "Collections",
    subtitle: "Save what you love",
    position: "bottom-0 right-8",
    delay: 0.45,
  },
];

function ImageSlider({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2rem] cursor-ew-resize border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-drape-surface group">
      {/* Base image is now After, so it is on the right side */}
      <img src={afterSrc} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" alt="After" />
      
      <div className="absolute top-4 right-4 z-0 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
        <span className="text-xs font-bold uppercase tracking-widest shimmer-text">After</span>
      </div>

      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none select-none" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {/* Clipped image is now Before, so it is on the left side */}
        <img src={beforeSrc} className="absolute inset-0 w-full h-full object-cover" alt="Before" />
        
        <div className="absolute top-4 left-4 z-0 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
          <span className="text-xs font-bold uppercase tracking-widest shimmer-text">Before</span>
        </div>
      </div>
      <input 
        type="range" min="0" max="100" value={sliderPosition} 
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10" 
      />
      <div className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-0 pointer-events-none" style={{ left: `calc(${sliderPosition}% - 1px)` }}>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
           <div className="flex gap-1">
             <div className="w-0.5 h-3 bg-gray-400 rounded-full" />
             <div className="w-0.5 h-3 bg-gray-400 rounded-full" />
           </div>
         </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.015] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs text-drape-text-dim uppercase tracking-[0.2em] mb-4 block">
            The Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Style at Your
            <br />
            <span className="shimmer-text">Fingertips</span>
          </h2>
        </motion.div>

        {/* Before/After Sliders Layout */}
        <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] mt-10">
          
          {/* Left Image (2) */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 30, rotate: -5 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: -5 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 md:left-[5%] top-1/2 -translate-y-1/2 w-[45%] md:w-[32%] aspect-[3/4] z-10 hover:z-30 hover:scale-105 transition-all duration-300"
          >
            <ImageSlider beforeSrc="/before 2.webp" afterSrc="/after 2.webp" />
          </motion.div>

          {/* Right Image (3) */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 30, rotate: 5 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 5 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-0 md:right-[5%] top-1/2 -translate-y-1/2 w-[45%] md:w-[32%] aspect-[3/4] z-10 hover:z-30 hover:scale-105 transition-all duration-300"
          >
            <ImageSlider beforeSrc="/before 3.webp" afterSrc="/after 3.webp" />
          </motion.div>

          {/* Middle Image (1) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] md:w-[38%] aspect-[3/4] z-20 hover:scale-[1.02] hover:z-30 transition-all duration-300 shadow-2xl shadow-black/50"
          >
            <ImageSlider beforeSrc="/before 1.webp" afterSrc="/after 1.webp" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
