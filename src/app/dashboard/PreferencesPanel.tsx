"use client";

import { usePreferences } from "../../lib/store";

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
    <div className="border p-4 rounded flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Preferences</h2>

      <label className="flex items-center gap-2">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        Dark Mode
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" checked={showEmail} onChange={toggleEmail} />
        Show Email
      </label>

      <div>
        <p className="font-medium">Layout</p>
        <select
          value={layout}
          onChange={(e) => setLayout(e.target.value as "grid" | "list")}
          className="border p-1 rounded"
        >
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </select>
      </div>
    </div>
  );
}
