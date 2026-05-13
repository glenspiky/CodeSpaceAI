"use client";

import { ShieldCheck, Laptop, Smartphone } from "lucide-react";

export function SecuritySettings() {
  const sessions = [
    {
      device: "Arch Linux - OptiPlex 3020",
      ip: "192.168.1.104",
      status: "Current",
      icon: Laptop,
    },
    {
      device: "Android - Nairobi, KE",
      ip: "102.210.x.x",
      status: "2 hours ago",
      icon: Smartphone,
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="p-6 rounded-3xl bg-[#0a0a0f] border border-white/5 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-400" />
          Active Network Sessions
        </h3>

        <div className="space-y-2">
          {sessions.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 bg-white/[0.01] border border-white/5 rounded-2xl hover:bg-white/[0.03] transition-all"
            >
              <div className="flex items-center gap-3">
                <s.icon size={18} className="text-zinc-500" />
                <div>
                  <p className="text-xs font-bold text-white">{s.device}</p>
                  <p className="text-[10px] font-mono text-zinc-600">{s.ip}</p>
                </div>
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded ${s.status === "Current" ? "bg-emerald-500/10 text-emerald-400" : "bg-zinc-800 text-zinc-500"}`}
              >
                {s.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
