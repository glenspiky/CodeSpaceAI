import { auth } from "@/lib/auth";

declare module "better-auth" {
  interface Session extends typeof auth.$Infer.Session {}
  interface User extends typeof auth.$Infer.User {}
}
