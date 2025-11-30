export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 gap-6">
      <h1 className="text-3xl font-bold">Mini Dashboard Project</h1>

      <p className="text-gray-600 text-center max-w-md">
        A simple demo app using Zod, Zustand, React Server Components, Suspense,
        and TypeScript. Choose an option below to continue.
      </p>

      <div className="flex gap-4">
        <a
          href="/profile/new"
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Create Profile
        </a>

        <a
          href="/dashboard"
          className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-900"
        >
          View Dashboard
        </a>
      </div>
    </main>
  );
}
