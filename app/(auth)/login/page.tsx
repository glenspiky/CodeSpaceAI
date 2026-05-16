"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Loader2, AlertCircle, LogIn } from "lucide-react";
import { signUpSchema, type SignUpInput } from "@/lib/validations/auth";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Reusing the email and password fields from your existing schema
type LoginInput = Pick<SignUpInput, "email" | "password">;

export default function LoginPage() {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(signUpSchema.pick({ email: true, password: true })),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginInput) => {
    setServerError(null);

    try {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/dashboard",
      });

      if (error) {
        // Better-auth returns specific messages for invalid credentials
        setServerError(error.message || "Invalid email or password");
        return;
      }
    } catch (err) {
      setServerError("Connection failed. Ensure MongoDB is running.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md space-y-8 bg-card p-8 rounded-xl border border-border shadow-lg"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary italic">
            DevSpace-AI
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Dynamic Alert for Login Failures */}
        <AnimatePresence mode="wait">
          {serverError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium"
            >
              <AlertCircle size={16} />
              {serverError}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2 opacity-70">
              <Mail size={14} /> Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="glen@example.com"
              className={cn(
                "w-full px-4 py-2 rounded-md bg-secondary border border-input focus:ring-2 focus:ring-primary outline-none transition-all",
                errors.email && "border-destructive focus:ring-destructive",
              )}
            />
            {errors.email && (
              <p className="text-[10px] text-destructive font-bold uppercase">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2 opacity-70">
                <Lock size={14} /> Password
              </label>
              <Link
                href="#"
                className="text-[10px] text-primary font-bold uppercase hover:underline"
              >
                Forgot?
              </Link>
            </div>
            <input
              {...register("password")}
              type="password"
              placeholder="••••••••"
              className={cn(
                "w-full px-4 py-2 rounded-md bg-secondary border border-input focus:ring-2 focus:ring-primary outline-none transition-all",
                errors.password && "border-destructive focus:ring-destructive",
              )}
            />
            {errors.password && (
              <p className="text-[10px] text-destructive font-bold uppercase">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary text-primary-foreground rounded-md font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50 shadow-md"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <>
                Sign In <LogIn size={18} />
              </>
            )}
          </motion.button>
        </form>

        <div className="pt-4 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            New to DevSpace-AI?{" "}
            <Link
              href="/register"
              className="text-primary font-bold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
