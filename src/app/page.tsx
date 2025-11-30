"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "react-use-gesture";

/**
 * GOD-TIER LANDING PAGE
 * - Gradient mesh background + spotlight
 * - Floating orbs for depth
 * - 3D tilt feature cards
 * - Subtle particles, mounted only on client to avoid hydration issues
 * - Clean navbar + keyboard-hint CTA
 */

export default function HomePage() {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  // Cursor-reactive spotlight only on client
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
      {/* Spotlight layer */}
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

      {/* Particles (client-only to avoid hydration mismatch) */}
      <Particles />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
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

        {/* Feature + stack grid */}
        <section className="grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-10 w-full max-w-5xl">
          {/* Feature cards (3D tilt) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TiltCard
              title="Zod Validation"
              desc="Schema-based validation shared across client + API, with TypeScript inference."
            />
            <TiltCard
              title="React Server Components"
              desc="Server-side data loading with minimal client JS and faster TTFB."
            />
            <TiltCard
              title="Zustand State Store"
              desc="Lightweight global state for preferences without Redux overhead."
            />
            <TiltCard
              title="Suspense + Async"
              desc="Structured loading states with Suspense and async boundaries."
            />
          </div>

          {/* Stack + quick actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-6 shadow-xl space-y-4">
              <h2 className="text-lg font-semibold">Tech Stack Overview</h2>
              <p className="text-sm text-gray-300">
                Built with a modern, real-world stack you can talk through in
                detail during interviews.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Next.js 14 (App Router)",
                  "TypeScript",
                  "React Server Components",
                  "Zod",
                  "Zustand",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-xl space-y-4">
              <h3 className="text-sm font-semibold text-gray-200 flex items-center justify-between">
                Quick Actions
                <span className="text-[10px] px-2 py-1 rounded-full border border-white/20 text-gray-300">
                  Suggested flows
                </span>
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex justify-between items-center">
                  <span>1. Create a profile with Zod validation</span>
                  <span className="text-[11px] text-gray-400">
                    /profile/new
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>2. Open the dashboard (RSC + Suspense)</span>
                  <span className="text-[11px] text-gray-400">/dashboard</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>3. Toggle preferences via Zustand</span>
                  <span className="text-[11px] text-gray-400">
                    Preferences panel
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="pt-10 text-xs text-gray-500 text-center">
          Designed to demonstrate practical, modern React patterns in a single,
          interview-friendly mini app.
        </footer>
      </div>
    </main>
  );
}

/* 🔹 Navbar (simple, clean, glassy) */

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-30 bg-white/10 border border-white/20 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg"
    >
      <div className="flex items-center gap-4 text-[11px] font-medium text-gray-200">
        <span className="text-xs font-semibold tracking-wide">
          Mini Dashboard
        </span>
        <span className="h-1 w-1 rounded-full bg-gray-400" />
        <span className="hidden sm:inline text-gray-300">
          Zod · Zustand · RSC · Suspense · TS
        </span>
      </div>
    </motion.nav>
  );
}

/* 🔹 CTA Button */

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

/* 🔹 Floating Orb layer */

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

/* 🔹 3D Tilt Card (react-spring + use-gesture) */

function TiltCard({ title, desc }: { title: string; desc: string }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [{ rotateX, rotateY, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 4, tension: 280, friction: 32 },
  }));

  useGesture(
    {
      onMove: ({ xy: [px, py] }) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = px - rect.left;
        const y = py - rect.top;

        const dx = (x - rect.width / 2) / 20;
        const dy = -(y - rect.height / 2) / 20;

        api.start({ rotateX: dy, rotateY: dx, scale: 1.04 });
      },
      onHover: ({ hovering }) => {
        if (!hovering) api.start({ rotateX: 0, rotateY: 0, scale: 1 });
      },
    },
    { target: cardRef }
  );

  return (
    <animated.div
      ref={cardRef}
      style={{ rotateX, rotateY, scale }}
      className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl hover:shadow-purple-400/30 transition will-change-transform"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{desc}</p>
    </animated.div>
  );
}

/* 🔹 Particles (client-only, no window in render) */

function Particles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 50 }).map((_, i) => ({
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
