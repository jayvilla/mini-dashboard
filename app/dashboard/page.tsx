import { Suspense } from "react";
import UserSummary from "./UserSummary";
import PreferencesPanel from "./PreferencesPanel";

export default function DashboardPage() {
  return (
    <div className="max-w-3xl mx-auto mt-10 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <Suspense fallback={<p>Loading profile...</p>}>
        <UserSummary />
      </Suspense>

      <PreferencesPanel />
    </div>
  );
}
