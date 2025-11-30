import { Suspense } from "react";
import { motion } from "framer-motion";
import UserSummary from "./UserSummary";
import PreferencesPanel from "./PreferencesPanel";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white mesh-bg flex items-center justify-center p-10">
      <div className="max-w-6xl w-full">
        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-10 text-center shimmer"
        >
          Dashboard
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">
          {/* LEFT: USER SUMMARY (Server Component) */}
          <div>
            <Suspense
              fallback={
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-gray-300 text-center animate-pulse">
                  Loading profile...
                </div>
              }
            >
              <UserSummaryCard />
            </Suspense>
          </div>

          {/* RIGHT: CLIENT PREFERENCES */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PreferencesPanel />
          </motion.div>
        </div>
      </div>
    </main>
  );
}

/* WRAPPER for nice styling around RSC */
function UserSummaryCard() {
  return (
    <div className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl">
      <UserSummary />
    </div>
  );
}
