"use client";

import { Button } from "@/components/ui/button";

export function ProfileSettings() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="p-6 rounded-3xl bg-[#0a0a0f] border border-white/5 space-y-6 shadow-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-tighter">
          Identity Configuration
        </h3>

        <div className="grid gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-zinc-600 ml-1">
              Handle
            </label>
            <input
              type="text"
              defaultValue="glenbarasa"
              className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 h-10 text-sm text-white outline-none focus:border-indigo-500/50"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-zinc-600 ml-1">
              Research Bio
            </label>
            <textarea
              className="w-full bg-white/[0.02] border border-white/5 rounded-xl p-4 text-sm text-white outline-none focus:border-indigo-500/50 min-h-[100px] resize-none"
              placeholder="Security researcher based in Nairobi..."
            />
          </div>
        </div>

        <Button className="bg-indigo-600 hover:bg-indigo-500 h-9 px-8 rounded-lg text-xs">
          Sync Profile
        </Button>
      </div>
    </div>
  );
}
