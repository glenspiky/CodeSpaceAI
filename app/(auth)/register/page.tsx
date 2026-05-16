"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Lock, Loader2, AlertCircle } from "lucide-react";
import { signUpSchema, type SignUpInput } from "@/lib/validations/auth";
import { signUp } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SignUpPage() {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignUpInput) => {
    setServerError(null);

    try {
      const { data: res, error } = await signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        callbackURL: "/dashboard",
      });

      if (error) {
        setServerError(error.message || "An unexpected error occurred");
        return;
      }

      console.log("Success:", res);
    } catch (err) {
      setServerError("Connection failed. Check your database or network.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 bg-card p-8 rounded-xl border border-border shadow-lg"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">DevSpace-AI</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Create your account to start building.
          </p>
        </div>

        {/* Server Error Alert */}
        <AnimatePresence>
          {serverError && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2 p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium"
            >
              <AlertCircle size={16} />
              {serverError}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2 opacity-70">
              <User size={14} /> Full Name
            </label>
            <input
              {...register("name")}
              placeholder="Your Name"
              className={cn(
                "w-full px-4 py-2 rounded-md bg-secondary border border-input focus:ring-2 focus:ring-primary outline-none transition-all",
                errors.name && "border-destructive focus:ring-destructive",
              )}
            />
            {errors.name && (
              <p className="text-[10px] text-destructive font-bold uppercase">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
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

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2 opacity-70">
              <Lock size={14} /> Password
            </label>
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

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary text-primary-foreground rounded-md font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-md active:shadow-none"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Creating Account...
              </>
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>

        {/* --- Account Check Section --- */}
        <div className="pt-4 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline transition-all"
            >
              Log in here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
