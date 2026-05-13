"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Code2,
  FolderKanban, // Changed from FolderCanvas
  Settings,
  Terminal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Snippets", href: "/snippets", icon: Code2 },
  { name: "Projects", href: "/projects", icon: FolderKanban }, // Updated icon
  { name: "Terminal", href: "/terminal", icon: Terminal },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "relative flex flex-col border-r border-white/5 bg-[#05050a] transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      {/* Branding / Logo Area */}
      <div className="flex h-20 items-center px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/20">
            <span className="text-xl font-bold text-white">D</span>
          </div>
          {!isCollapsed && (
            <span className="text-lg font-bold tracking-tight text-white">
              DevSpace AI
            </span>
          )}
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2 px-3 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(79,70,229,0.1)]"
                  : "text-zinc-500 hover:bg-white/5 hover:text-white",
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 shrink-0",
                  isActive ? "text-indigo-400" : "group-hover:text-white",
                )}
              />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute flex -right-4 top-18 z-100  h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white "
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* User Footer Space (Optional placeholder) */}
      <div className="border-t border-white/5 p-4">
        <div
          className={cn(
            "flex items-center gap-3",
            isCollapsed && "justify-center",
          )}
        >
          <div className="h-8 w-8 rounded-full bg-zinc-800 border border-white/10" />
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-xs font-medium text-white">
                Developer Mode
              </span>
              <span className="text-[10px] text-zinc-500">v1.0.0-alpha</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
