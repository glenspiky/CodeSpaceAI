"use client";

import { Search, Bell, Command } from "lucide-react";
import { authClient } from "@/lib/auth/auth-client"; // Adjust path to your auth client
import { useRouter } from "next/navigation";

export default function DashboardNavbar() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  return (
    <header className="flex h-20 items-center justify-between border-b border-white/5 bg-[#05050a]/50 px-6 backdrop-blur-xl lg:px-10">
      {/* 1. Search / Command Palette Trigger */}
      <div className="flex w-full max-w-xl items-center gap-4">
        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search snippets or ask AI..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-12 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all"
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <kbd className="hidden sm:flex h-5 items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-sans text-[10px] font-medium text-zinc-500">
              <Command size={10} /> K
            </kbd>
          </div>
        </div>
      </div>

      {/* 2. Right Side Actions */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-indigo-500 border-2 border-[#05050a]" />
        </button>

        {/* User Profile / Avatar */}
        <div className="flex items-center gap-3 pl-4 border-l border-white/5">
          <div className="flex flex-col items-end hidden sm:flex">
            <span className="text-xs font-medium text-white">
              {session?.user?.name || "Developer"}
            </span>
            <span className="text-[10px] text-zinc-500">Pro Plan</span>
          </div>
          <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-zinc-800 shadow-lg transition-transform active:scale-95 cursor-pointer">
            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt="User"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                {session?.user?.name?.charAt(0) || "D"}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
