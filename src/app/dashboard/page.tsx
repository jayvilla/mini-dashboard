// app/dashboard/page.tsx
import { Suspense } from "react";
import UserSummary from "./UserSummary";
import PreferencesPanel from "./PreferencesPanel";
import DashboardHeader from "./DashboardHeader";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white mesh-bg flex items-center justify-center p-10">
      <div className="max-w-6xl w-full">
        <DashboardHeader />

        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">
          {/* Left: RSC user summary */}
          <div>
            <Suspense fallback={<FallbackCard />}>
              <UserSummaryCard />
            </Suspense>
          </div>

          {/* Right: client preferences panel */}
          <PreferencesPanel />
        </div>
      </div>
    </main>
  );
}

function UserSummaryCard() {
  return (
    <div className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl">
      <UserSummary />
    </div>
  );
}

function FallbackCard() {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-gray-300 text-center animate-pulse">
      Loading profile...
    </div>
  );
}
