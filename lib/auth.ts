import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectToDatabase } from "./db";

// Use an async function to initialize auth since db connection is async
const db = await connectToDatabase();

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  // Adding explicit types for social providers
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});

// Export types for use in your frontend components
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.user;
