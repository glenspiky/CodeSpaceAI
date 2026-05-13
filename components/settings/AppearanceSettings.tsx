"use client";

import { useSettingsStore } from "@/store/useSettingsStore";
import { Moon, Sun, Monitor, Type } from "lucide-react";

export function AppearanceSettings() {
  const { theme, setTheme, fontLigatures, toggleLigatures } =
    useSettingsStore();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="p-6 rounded-3xl bg-[#0a0a0f] border border-white/5 space-y-8 shadow-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-tighter">
          Theme Selection
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: "dark", icon: Moon, label: "Dark" },
            { id: "light", icon: Sun, label: "Light" },
            { id: "system", icon: Monitor, label: "System" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setTheme(item.id as any)}
              className={`p-4 rounded-2xl border transition-all flex flex-col items-center gap-2 ${
                theme === item.id
                  ? "bg-indigo-600/10 border-indigo-500/30 text-indigo-400"
                  : "bg-white/[0.02] border-white/5 text-zinc-600 hover:border-white/10"
              }`}
            >
              <item.icon size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Font Ligatures Toggle */}
        <div
          className="flex items-center justify-between p-4 bg-white/[0.01] border border-white/5 rounded-2xl cursor-pointer"
          onClick={toggleLigatures}
        >
          <div className="flex items-center gap-3">
            <Type size={14} className="text-zinc-400" />
            <div>
              <p className="text-xs font-bold text-white">Font Ligatures</p>
              <p className="text-[10px] text-zinc-600 font-mono">
                {"=> -> != ==="}
              </p>
            </div>
          </div>
          <div
            className={`h-5 w-9 rounded-full flex items-center px-1 transition-colors ${fontLigatures ? "bg-indigo-600" : "bg-zinc-800"}`}
          >
            <div
              className={`h-3 w-3 bg-white rounded-full transition-transform ${fontLigatures ? "translate-x-4" : "translate-x-0"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
