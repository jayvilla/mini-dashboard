// app/dashboard/UserSummary.tsx
import { getUser } from "@/lib/db";

export default async function UserSummary() {
  const user = getUser();

  if (!user) {
    return (
      <p className="text-gray-300">
        No profile found. Please create one on the profile page.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold">Your Profile</h2>
      <p className="text-gray-300">
        <span className="font-medium">Name:</span> {user.name}
      </p>
      <p className="text-gray-300">
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p className="text-gray-300">
        <span className="font-medium">Age:</span> {user.age}
      </p>
    </div>
  );
}
