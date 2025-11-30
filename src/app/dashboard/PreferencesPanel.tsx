// app/dashboard/PreferencesPanel.tsx
"use client";

import { motion } from "framer-motion";
import { usePreferences } from "@/lib/store";

export default function PreferencesPanel() {
  const {
    darkMode,
    toggleDarkMode,
    showEmail,
    toggleEmail,
    layout,
    setLayout,
  } = usePreferences();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl space-y-6"
    >
      <h2 className="text-xl font-semibold">Preferences</h2>

      <label className="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span>Dark Mode</span>
      </label>

      <label className="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" checked={showEmail} onChange={toggleEmail} />
        <span>Show Email</span>
      </label>

      <div className="space-y-1">
        <p className="font-medium">Layout</p>
        <select
          value={layout}
          onChange={(e) => setLayout(e.target.value as "grid" | "list")}
          className="bg-black/40 border border-white/20 rounded-xl px-4 py-2 outline-none"
        >
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </select>
      </div>
    </motion.div>
  );
}
