"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

const InstagramIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:drapeaiofficial@gmail.com", label: "Email" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative py-20 px-6 border-t border-white/5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8"
        >
          {/* Logo & Tagline */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/hanger.png" alt="DRAPE" className="w-12 h-12 object-contain" />
              <span className="text-white font-semibold text-lg tracking-tight">
                DRAPE
              </span>
            </div>
            <p className="text-sm text-drape-text-dim mb-6 leading-relaxed">
              Your wardrobe, reimagined. Experience the future of personal style and outfit curation today.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-drape-text-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-medium mb-5">Menu</h4>
            <ul className="space-y-3">
              {[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Join Waitlist", href: "#waitlist" }
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-drape-text-muted hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-5">Stay Updated</h4>
            <p className="text-sm text-drape-text-dim mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest style tips and product updates.
            </p>
            <div className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder:text-drape-text-dim focus:border-white/30 focus:bg-white/[0.07] outline-none transition-all"
              />
              <button className="bg-white text-black px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-white/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-drape-text-dim">
            &copy; {new Date().getFullYear()} DRAPE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-drape-text-dim hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-drape-text-dim hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
