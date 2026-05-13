"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "../../../public/icons/logo.png"; // Adjust path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50 py-6 px-6 lg:px-20 flex items-center justify-between font-sans">
      {/* Brand Identity */}
      <Link href="/" className="flex items-center space-x-3 group">
        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
          <span className="text-xl font-bold text-white">D</span>
        </div>
        <span className="text-2xl font-bold tracking-tight text-white">
          DevSpace AI
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden min-[860px]:flex items-center space-x-10">
        <div className="flex items-center space-x-8 text-sm font-medium text-zinc-400">
          <Link href="#" className="hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Snippets
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Pricing
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-white hover:bg-white/5"
            >
              Login
            </Button>
          </Link>
          <Link href="/login">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-6 shadow-lg shadow-indigo-600/20">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="min-[860px]:hidden p-2 text-white z-[60] relative bg-white/5 rounded-lg border border-white/10 backdrop-blur-md"
      >
        <div className="space-y-1.5 w-6">
          <span
            className={`block h-0.5 bg-current transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block h-0.5 bg-current transition-all ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-0.5 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#05050a]/98 backdrop-blur-2xl z-[55] flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
      >
        <Link
          href="#"
          onClick={() => setIsOpen(false)}
          className="text-3xl font-bold text-white"
        >
          Dashboard
        </Link>
        <Link
          href="#"
          onClick={() => setIsOpen(false)}
          className="text-3xl font-bold text-white"
        >
          Snippets
        </Link>
        <Link
          href="/login"
          onClick={() => setIsOpen(false)}
          className="text-3xl font-bold text-white"
        >
          Pricing
        </Link>
        <div className="flex flex-col w-full px-10 gap-4 pt-10">
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="w-full"
          >
            <Button
              className="w-full h-16 text-xl bg-white border border-white/10"
              variant="outline"
            >
              Login
            </Button>
          </Link>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="w-full"
          >
            <Button className="w-full h-16 text-xl bg-indigo-600">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
