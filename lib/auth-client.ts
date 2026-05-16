import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // This must match your BETTER_AUTH_URL in .env
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
});

// Helper exports for your UI
export const { signUp, signIn, signOut, useSession } = authClient;
