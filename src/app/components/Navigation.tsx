"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Join Waitlist", href: "#waitlist" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div
            className={`liquid-glass rounded-2xl px-4 py-2 md:px-6 md:py-3 flex items-center justify-between transition-all duration-500 ${
              scrolled ? "shadow-lg" : ""
            }`}
          >
            <a href="#" className="flex items-center gap-2">
              <img src="/hanger.png" alt="DRAPE" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
              <span className="text-white font-semibold text-base md:text-lg tracking-tight">
                DRAPE
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-drape-text-muted hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a href="#waitlist">
                <button className="glow-btn text-sm py-2.5 px-6 rounded-xl">
                  Get Early Access
                </button>
              </a>
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-drape-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl text-white font-medium"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#waitlist"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMobileOpen(false)}
            >
              <button className="clay-btn mt-4">Get Early Access</button>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
