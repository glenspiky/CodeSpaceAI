"use client";

import Image from "next/image";
import CleanHeroBg from "../../public/images/hero-clean-bg.webp";
import logo from "../../public/icons/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sparkles, Terminal, BarChart3 } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import aiAssistantImg from "../../public/images/aiImage.png";
import Cta from "@/components/layout/cta/Cta";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <main className="dark min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden flex items-center">
        {/* THE BACKGROUND IMAGE */}
        <Image
          src={CleanHeroBg}
          alt="Workspace Background"
          fill
          priority
          quality={100}
          className="object-cover object-center z-0 pointer-events-none"
        />

        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/40 to-background z-1" />

        {/* CONTENT LAYER */}
        <div className="container relative z-10 px-6 lg:px-20 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col space-y-8 max-w-2xl"
            >
              <h1 className="text-5xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
                Your AI-Powered
                <br />
                <span className="text-white">Developer Workspace</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground  max-w-lg leading-relaxed">
                Accelerate your coding workflow with AI-generated code, snippet
                management, and project analytics – all in one place.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {/* Shadcn Button with Framer Motion scaling */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="h-14 px-10 text-lg font-semibold shadow-xl shadow-primary/20 cursor-pointer"
                  >
                    Get Started
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-10 text-lg font-semibold bg-surface/50 backdrop-blur-md cursor-pointer"
                  >
                    View Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <div className="hidden md:block" />
          </div>
        </div>

        <nav className="absolute -top-4 w-full z-50 py-8 px-0 min-[860px]:px-2 lg:px-20 flex items-center justify-between">
          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-[55] flex flex-col items-center justify-center space-y-8 transition-transform duration-300 min-[860px]:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Mobile Links */}
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium"
            >
              Snippets
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium"
            >
              Pricing
            </Link>

            <div className="flex flex-col w-full px-10 gap-4 pt-10">
              <Link
                href="/login" >
                <Button
                  className="w-full h-14 text-lg bg-surface border border-border"
                  variant="secondary"
                >
                  Login
                </Button>
              </Link>

              <Button className="w-full h-14 text-lg">Sign Up</Button>
            </div>
          </div>
          <Link href="/">
            <div className="flex items-center space-x-4 ">
              <Image
                src={logo}
                alt="Logo"
                width={90}
                height={90}
                className="object-contain"
              />
              {/* font-bold: Matches the thick branding in your screenshot */}
              <span className="text-2xl font-bold tracking-tight text-foreground -ml-9">
                DevSpace AI
              </span>
            </div>
          </Link>
          {/* LINKS GROUP - Stays on the right */}
          <div className="flex items-center space-x-8">
            {/* Hidden on mobile, flex on medium screens and up */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Snippets
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
            </div>

            {/* BUTTON GROUP */}
            <div className="flex items-center space-x-3 cursor-pointer">
              <Button
                variant="secondary"
                className="text-muted-foreground hover:text-foreground hidden sm:flex "
              >
                Login
              </Button>

              <Button className="text-sm hidden md:flex">Sign Up</Button>
              {/* This button only shows up on mobile/small screens */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="min-[860px]:hidden p-2 text-foreground z-[60] relative"
              >
                {/* Simple animated hamburger using Lucide or basic spans */}
                <div className="space-y-1.5 mr-2">
                  <span
                    className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? "opacity-0" : ""}`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-32 bg-background border-t border-border">
        <div className="container px-6 lg:px-20 mx-auto">
          <div className="max-w-2xl mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Everything you need, <br />
              all in one place.
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="AI Assistant"
              description="Intelligent code completion and refactoring powered by advanced neural networks."
              icon={<Sparkles className="size-8 text-primary" />}
              index={1}
            />
            <FeatureCard
              title="Snippet Manager"
              description="Save, organize, and sync your most-used code blocks across all your environments."
              icon={<Terminal className="size-8 text-primary" />}
              index={2}
            />
            <FeatureCard
              title="Project Analytics"
              description="Track your productivity trends and project health with real-time data visualization."
              icon={<BarChart3 className="size-8 text-primary" />}
              index={3}
            />
          </div>
        </div>
      </section>
      <section className="py-24 bg-background overflow-hidden">
        <div className="container px-6 lg:px-20 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight">
              Meet your new <span className="text-primary">AI partner.</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              DevSpace understands your code context to provide accurate,
              ready-to-use snippets in real-time.
            </p>
          </div>

          {/* The Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass p-2 md:p-4 rounded-[2.5rem] border-border relative group"
          >
            {/* The Royal Purple Glow behind the image */}
            <div className="absolute -inset-1 bg-linear-to-r from-primary/30 to-secondary/30 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />

            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl">
              <Image
                src={aiAssistantImg} // Path to your ai.png
                alt="DevSpace AI Assistant"
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
      <Cta></Cta>
     
    </main>
  );
}
