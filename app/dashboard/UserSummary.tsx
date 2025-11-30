import { getUser } from "../../lib/db";

export default async function UserSummary() {
  const user = getUser();

  if (!user) {
    return <p>No profile found. Create one first.</p>;
  }

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold">User Summary</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
