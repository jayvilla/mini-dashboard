import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z
    .number({ invalid_type_error: "Age must be a number" })
    .int()
    .min(18, "Must be at least 18"),
});

export type ProfileInput = z.infer<typeof ProfileSchema>;
