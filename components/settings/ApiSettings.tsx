"use client";

import { useState } from "react";
import { Key, Eye, EyeOff, Copy, RefreshCw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ApiSettings() {
  const [showKey, setShowKey] = useState(false);
  const [apiKey] = useState("ds_live_8f3k2m9sLp0xZq4vN6r7tW"); // Mock key for UI

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    // You could add a toast notification here
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Secret Keys Section */}
      <div className="p-6 rounded-3xl bg-[#0a0a0f] border border-white/5 space-y-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Key size={18} className="text-indigo-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-tighter">
              API Credentials
            </h3>
          </div>
          <Button
            variant="ghost"
            className="h-8 text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest"
          >
            <RefreshCw size={12} className="mr-2" /> Roll Key
          </Button>
        </div>

        <div className="space-y-4">
          <p className="text-xs text-zinc-500 leading-relaxed">
            Use this secret key to authenticate your local terminal or CLI tools
            with the DevSpace AI cloud.
            <span className="text-amber-500/80 ml-1">
              Do not share this in public repositories.
            </span>
          </p>

          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                type={showKey ? "text" : "password"}
                readOnly
                value={apiKey}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 h-11 text-xs font-mono text-indigo-300 outline-none"
              />
              <button
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 p-1"
              >
                {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <Button
              onClick={copyToClipboard}
              className="bg-zinc-800 hover:bg-zinc-700 h-11 px-4 rounded-xl transition-all"
            >
              <Copy size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Connected Services */}
      <div className="p-6 rounded-3xl bg-[#0a0a0f] border border-white/5 space-y-4 shadow-xl">
        <h3 className="text-xs font-bold text-white uppercase tracking-tighter">
          Integrations
        </h3>

        <div className="grid gap-2">
          <div className="flex items-center justify-between p-4 bg-white/[0.01] border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-[10px]">
                GH
              </div>
              <div>
                <p className="text-xs font-bold text-white">GitHub OAuth</p>
                <p className="text-[10px] text-zinc-600">
                  Connected to @glenbarasa
                </p>
              </div>
            </div>
            <button className="text-[10px] text-red-500/70 hover:text-red-500 font-bold uppercase tracking-widest">
              Revoke
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/[0.01] border border-white/5 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center font-bold text-[10px] text-indigo-400">
                AI
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  Better Auth Session
                </p>
                <p className="text-[10px] text-zinc-600">
                  Active JWT • Expires in 7 days
                </p>
              </div>
            </div>
            <button className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
              Manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
