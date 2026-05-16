import z from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Inavalid email address"),
  password: z
    .string()
    .min(1, "Password is required") // Ensures it's not empty
    .min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name is too short"),
});
export type SignUpInput = z.infer<typeof signUpSchema>;
