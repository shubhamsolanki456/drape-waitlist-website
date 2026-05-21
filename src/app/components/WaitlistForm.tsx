"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, Loader2, AlertCircle, Mail, User } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="waitlist"
      className="relative py-32 px-6 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-2xl pointer-events-none float-animation" />
      <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-white/[0.02] blur-2xl pointer-events-none float-animation-delayed" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-xs text-drape-text-dim uppercase tracking-[0.2em] mb-4 block">
            Early Access
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Be the First to
            <br />
            <span className="shimmer-text">Experience DRAPE</span>
          </h2>
          <p className="text-drape-text-muted max-w-lg mx-auto text-lg">
            Join thousands of fashion-forward individuals who are redefining
            their relationship with their wardrobe.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="liquid-glass-strong rounded-3xl p-6 sm:p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 pulse-glow">
                  <Check size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  You&apos;re In!
                </h3>
                <p className="text-drape-text-muted">
                  {message} We&apos;ll be in touch soon with your early access.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name Input */}
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-drape-text-dim"
                  />
                  <input
                    type="text"
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-drape-text-dim focus:border-white/30 focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-drape-text-dim"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-drape-text-dim focus:border-white/30 focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>

                {/* Error Message */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-red-400 text-sm"
                    >
                      <AlertCircle size={16} />
                      {message}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="clay-btn w-full text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 size={18} className="animate-spin" />
                      Joining...
                    </span>
                  ) : (
                    "Join the Waitlist"
                  )}
                </button>

                <p className="text-center text-xs text-drape-text-dim">
                  No spam, ever. Unsubscribe anytime. We respect your privacy.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces&auto=format&q=80",
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=faces&auto=format&q=80"
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Joined user"
                  className="w-10 h-10 rounded-full border-2 border-drape-black object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-drape-text-muted ml-2">
              +1,847 joined this week
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
