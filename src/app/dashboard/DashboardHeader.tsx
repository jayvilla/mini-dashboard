// app/dashboard/DashboardHeader.tsx
"use client";

import { motion } from "framer-motion";

export default function DashboardHeader() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold mb-10 text-center shimmer"
    >
      Dashboard
    </motion.h1>
  );
}
