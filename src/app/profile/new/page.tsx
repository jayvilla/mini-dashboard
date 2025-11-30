"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ProfileSchema, ProfileInput } from "@/lib/validation";
import { useRouter } from "next/navigation";

export default function NewProfilePage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileInput>({
    resolver: zodResolver(ProfileSchema),
  });

  const onSubmit = async (data: ProfileInput) => {
    await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(data),
    });

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white p-6 mesh-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-6">Create Profile</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* NAME */}
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/20 text-white focus:border-indigo-400 outline-none"
              {...register("name")}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/20 text-white focus:border-indigo-400 outline-none"
              {...register("email")}
              placeholder="you@example.com"
              type="email"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* AGE */}
          <div>
            <label className="block mb-1 text-sm font-medium">Age</label>
            <input
              className="w-full px-4 py-2 rounded-xl bg-black/40 border border-white/20 text-white focus:border-indigo-400 outline-none"
              {...register("age", { valueAsNumber: true })}
              placeholder="18"
              type="number"
            />
            {errors.age && (
              <p className="text-red-400 text-sm mt-1">{errors.age.message}</p>
            )}
          </div>

          {/* SUBMIT */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg text-lg font-semibold"
            type="submit"
          >
            Save Profile
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}
