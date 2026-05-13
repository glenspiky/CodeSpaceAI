"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const TerminalEmulator = dynamic(
  () => import("@/components/shared/TerminalEmulator"),
  {
    ssr: false,
    loading: () => (
      <div className="h-full flex items-center justify-center bg-black/50 rounded-xl border border-white/5">
        <Loader2 className="h-5 w-5 animate-spin text-zinc-600" />
      </div>
    ),
  },
);

export default function TerminalClient() {
  return <TerminalEmulator />;
}
