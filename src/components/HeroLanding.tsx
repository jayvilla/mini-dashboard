// components/HeroLanding.tsx
"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroLanding() {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.setProperty("--x", `${e.clientX}px`);
      spotlightRef.current.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white mesh-bg">
      {/* Cursor spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(700px circle at var(--x) var(--y), rgba(255,255,255,0.12), transparent 45%)",
        }}
      />

      {/* Depth orbs */}
      <FloatingOrb
        size={320}
        color="rgba(129, 140, 248, 0.4)"
        top="8%"
        left="18%"
        delay={0}
      />
      <FloatingOrb
        size={260}
        color="rgba(56, 189, 248, 0.35)"
        top="62%"
        left="72%"
        delay={2}
      />
      <FloatingOrb
        size={180}
        color="rgba(236, 72, 153, 0.3)"
        top="40%"
        left="40%"
        delay={1}
      />

      {/* Particles */}
      <Particles />

      <div className="relative z-20 max-w-6xl w-full px-6 pt-32 pb-20 flex flex-col items-center gap-20">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs md:text-sm text-gray-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            1-day project · interview-ready · fully typed
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight shimmer">
            Next-Gen React Dashboard
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A focused demo that showcases Zod validation, React Server
            Components, Suspense, Zustand global state, and TypeScript in a
            clean, production-quality architecture.
          </p>
        </motion.section>

        {/* CTA card */}
        <section className="w-full max-w-3xl rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-8 shadow-2xl space-y-6">
          <h2 className="text-lg font-semibold">Try the two main flows</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>1. Create a profile with Zod validation</li>
            <li>2. View the dashboard rendered via React Server Components</li>
            <li>3. Toggle preferences with a Zustand global store</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <CTAButton
              href="/profile/new"
              label="Create Profile"
              variant="primary"
            />
            <CTAButton
              href="/dashboard"
              label="View Dashboard"
              variant="secondary"
            />
          </div>
        </section>

        <footer className="text-xs text-gray-500 text-center">
          Built with Next.js 14, TypeScript, Zod, Zustand, Suspense, and RSC.
        </footer>
      </div>
    </main>
  );
}

function CTAButton({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}) {
  const base =
    "flex-1 inline-flex justify-center items-center px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-2xl";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 shadow-blue-500/30 hover:scale-[1.03]"
      : "bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800 shadow-slate-500/30 hover:scale-[1.02]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
}

/* Floating orb */
function FloatingOrb({
  size,
  color,
  top,
  left,
  delay,
}: {
  size: number;
  color: string;
  top: string;
  left: string;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{ width: size, height: size, top, left, background: color }}
      animate={{ y: [0, -25, 0] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/* Particles – client-only */
function Particles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 6 + Math.random() * 6,
        delay: Math.random() * 5,
      })),
    []
  );

  if (!mounted) return null;

  return (
    <div
      className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-[2px] h-[2px] rounded-full bg-white/40"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{ y: ["0%", "-25%"], opacity: [0.8, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
