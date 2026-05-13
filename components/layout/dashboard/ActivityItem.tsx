import { Code2 } from "lucide-react";

interface ActivityItemProps {
  title: string;
  lang: string;
  time: string;
}

export function ActivityItem({ title, lang, time }: ActivityItemProps) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/30 transition-colors">
          <Code2 className="h-5 w-5 text-zinc-400 group-hover:text-indigo-400" />
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-200">{title}</p>
          <p className="text-xs text-zinc-500">{lang}</p>
        </div>
      </div>
      <span className="text-xs text-zinc-600">{time}</span>
    </div>
  );
}
