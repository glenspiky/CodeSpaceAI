"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { label: "TypeScript", value: "typescript" },
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "C", value: "c" },
  { label: "HTML/CSS", value: "html" },
];

export default function LanguageSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className="flex items-center justify-between gap-2 w-[180px] px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-all outline-none focus:ring-2 focus:ring-indigo-500/40">
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-indigo-400" />
          <Select.Value />
        </div>
        <Select.Icon>
          <ChevronDown size={14} className="text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="z-[100] overflow-hidden bg-[#0a0a0f] border border-white/10 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          position="popper"
          sideOffset={5}
        >
          <Select.Viewport className="p-1">
            {languages.map((lang) => (
              <Select.Item
                key={lang.value}
                value={lang.value}
                className={cn(
                  "flex items-center justify-between px-8 py-2.5 text-sm text-zinc-400 rounded-lg cursor-pointer outline-none transition-colors",
                  "focus:bg-indigo-600/10 focus:text-indigo-400 select-none",
                )}
              >
                <Select.ItemText>{lang.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check size={14} className="text-indigo-400" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
