"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectSelectorProps {
  pname: string;
  projects: { id: string; name: string }[];
  value: string;
  onChange: (id: string) => void;
}

export default function ProjectSelector({
  projects,
  value,
  onChange,
}: ProjectSelectorProps) {
  return (
    <div className="flex-[2] min-w-[200px] space-y-1">
      <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">
        Assign Project
      </label>

      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger className="flex items-center justify-between gap-2 w-full h-10 px-4 bg-[#0a0a0f] border border-white/10 rounded-xl text-sm text-zinc-300 hover:bg-white/5 transition-all outline-none focus:border-indigo-500/50">
          <div className="flex items-center gap-2 truncate">
            <Terminal size={14} className="text-indigo-400 shrink-0" />
            <Select.Value placeholder="Select Project" />
          </div>
          <Select.Icon>
            <ChevronDown size={14} className="text-zinc-500" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="z-[100] overflow-hidden bg-[#0b0b12] border border-white/10 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-100"
            position="popper"
            sideOffset={5}
          >
            <Select.Viewport className="p-1">
              <Select.Item
                value="none"
                className="flex items-center justify-between px-8 py-2 text-xs text-zinc-400 rounded-lg cursor-pointer outline-none focus:bg-white/5 focus:text-white"
              >
                <Select.ItemText>Standalone</Select.ItemText>
                <Select.ItemIndicator>
                  <Check size={14} className="text-indigo-400" />
                </Select.ItemIndicator>
              </Select.Item>

              {projects.map((project) => (
                <Select.Item
                  key={project.id}
                  value={project.id}
                  className="flex items-center justify-between px-8 py-2 text-xs text-zinc-400 rounded-lg cursor-pointer outline-none focus:bg-indigo-600/10 focus:text-indigo-400"
                >
                  <Select.ItemText>{project.name}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check size={14} className="text-indigo-400" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
