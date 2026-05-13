"use client";

import { useEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";

export default function TerminalEmulator() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    // Initialize Xterm with a "Matrix/Arch" aesthetic
    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: '"JetBrains Mono", monospace',
      theme: {
        background: "#0a0a0f",
        foreground: "#818cf8", // Indigo
        cursor: "#818cf8",
        selectionBackground: "rgba(129, 140, 248, 0.3)",
      },
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();

    term.writeln("\x1b[1;34mDevSpace AI v1.0.0 (Arch Linux)\x1b[0m");
    term.writeln("Type \x1b[32m'help'\x1b[0m to see available commands.");
    term.write("\r\n\x1b[1;32mglen@devspace\x1b[0m:\x1b[1;34m~\x1b[0m$ ");

    let currentLine = "";

    // Simple Command Processor
    term.onData((data) => {
      const code = data.charCodeAt(0);

      if (code === 13) {
        // Enter
        term.write("\r\n");
        handleCommand(currentLine, term);
        currentLine = "";
        term.write("\x1b[1;32mglen@devspace\x1b[0m:\x1b[1;34m~\x1b[0m$ ");
      } else if (code === 127) {
        // Backspace
        if (currentLine.length > 0) {
          currentLine = currentLine.slice(0, -1);
          term.write("\b \b");
        }
      } else {
        currentLine += data;
        term.write(data);
      }
    });

    xtermRef.current = term;
    return () => term.dispose();
  }, []);

  const handleCommand = (command: string, term: Terminal) => {
    const cmd = command.trim().toLowerCase();
    if (cmd === "help") {
      term.writeln("Available: status, fetch-snippets, clear, whoami");
    } else if (cmd === "whoami") {
      term.writeln("glen - Security Researcher & Dev");
    } else if (cmd === "clear") {
      term.clear();
    } else if (cmd) {
      term.writeln(`sh: command not found: ${cmd}`);
    }
  };

  return (
    <div className="w-full h-full bg-[#0a0a0f] p-4 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div ref={terminalRef} className="h-full w-full" />
    </div>
  );
}
