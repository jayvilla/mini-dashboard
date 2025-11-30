"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ProfileInput, ProfileSchema } from "../../../lib/validation";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

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
    <div className="max-w-md mx-auto mt-10 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Create Profile</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Name"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          label="Email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Age"
          type="number"
          {...register("age", { valueAsNumber: true })}
          error={errors.age?.message}
        />

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
