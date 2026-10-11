"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Smartphone,
  Globe,
  Bot,
  Zap,
  Terminal,
  ExternalLink,
  Mail,
  Send,
  CheckCircle,
  Copy,
  Youtube,
  Users,
  Award,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Sparkles,
  Play,
  Flame,
  Check,
  Radio,
  Code2,
  Layers,
  ChevronRight,
  Maximize2
} from "lucide-react";

// ==========================================
// 1. WIND & FLOWING COSMIC PARTICLES CANVAS
// ==========================================
function WindCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse position for wind deflection
    const mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000, speed: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mouse.prevX;
      const dy = e.clientY - mouse.prevY;
      mouse.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 30);
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Create breeze / wind particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 16), 85);
    interface WindParticle {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      color: string;
      alpha: number;
      thickness: number;
    }

    const colors = ["#38bdf8", "#818cf8", "#34d399", "#c084fc", "#67e8f9"];
    const particles: WindParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: 15 + Math.random() * 35,
        speed: 1.2 + Math.random() * 2.8,
        angle: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.15 + Math.random() * 0.45,
        thickness: 0.8 + Math.random() * 1.6,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Base horizontal wind breeze with gentle vertical sine wave
        p.x += p.speed;
        p.y += Math.sin(time + p.x * 0.005) * 0.6;

        // Interactive mouse wind airflow vortex
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          const force = (1 - dist / 160) * 8;
          p.x += (dx / dist) * force + (mouse.speed * 0.3);
          p.y += (dy / dist) * force;
        }

        // Wrap around borders
        if (p.x > width + 50) {
          p.x = -50;
          p.y = Math.random() * height;
        }
        if (p.y > height + 20) p.y = -20;
        if (p.y < -20) p.y = height + 20;

        // Draw flowing wind streak with head particle
        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.thickness;
        ctx.globalAlpha = p.alpha;
        ctx.lineCap = "round";

        const tailX = p.x - p.length;
        const tailY = p.y - Math.sin(time + p.x * 0.005) * 3;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        // Small glowing particle point at the head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.thickness * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = p.alpha * 1.2;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
    />
  );
}

// ==========================================
// 2. INTERACTIVE 3D COMPUTER DISPLAY SCREEN
// ==========================================
function InteractiveDeviceScreen() {
  const [activeTab, setActiveTab] = useState<"flutter" | "next" | "ai">("flutter");
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const screenRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!screenRef.current) return;
    const rect = screenRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate smooth 3D tilt angles
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const codeSnippets = {
    flutter: `// OBIN - Gaming & Super Hub (Flutter 3.x / Dart)
import 'package:flutter/material.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';
import 'package:url_launcher/url_launcher.dart';

class ObinProductionApp extends StatelessWidget {
  const ObinProductionApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('OBIN v3.0.8 • Play Store Live'),
        backgroundColor: const Color(0xFF07090E),
      ),
      body: ObinSuperHubGrid(
        features: [
          GamingUtilities(status: 'Approved'),
          AdMobMonetization(rewarded: true),
          SecureExternalCheckout(gateway: 'bKash Direct'),
          GdprAccountDeletion(compliant: true),
        ],
      ),
    );
  }
}`,
    next: `// OBIN Shop Web Platform (Next.js 15 / React 19)
import type { Metadata } from 'next';
import { ObinCatalog, EdgeAuth, VercelEdge } from '@/components';

export const metadata: Metadata = {
  title: 'OBIN Shop | Next-Gen E-Commerce Portal',
  description: 'Instant sub-second catalog with Edge SSR rendering',
};

export default async function ObinShopPage() {
  const catalog = await VercelEdge.fetchVerifiedCatalog({
    revalidate: 60, // Incremental Static Regeneration
  });

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <ObinCatalog items={catalog} instantCheckout={true} />
    </main>
  );
}`,
    ai: `# 24/7 Autonomous Background Sync Engine
import asyncio
from cloud_render import TelegramDaemon, GoogleSheetsAPI

async def execute_realtime_sync():
    """Continuously monitors incoming orders and syncs stock."""
    client = TelegramDaemon(bot_id="@obin_bot")
    sheet = GoogleSheetsAPI(sheet_id="OBIN_DB_LIVE")
    
    print("⚡ [DAEMON LIVE] 24/7 background sync running on Render...")
    while True:
        payload = await client.poll_pending_transactions()
        if payload:
            sheet.append_record(payload)
            await client.send_instant_receipt(payload.user_id)
        await asyncio.sleep(2)

asyncio.run(execute_realtime_sync())`,
  };

  return (
    <div
      className="perspective-container my-12 w-full max-w-4xl mx-auto px-4 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={screenRef}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
        className="preserve-3d relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-purple-500/30 shadow-[0_20px_70px_-15px_rgba(6,182,212,0.35)]"
      >
        {/* Computer Screen Frame */}
        <div className="relative rounded-[22px] bg-[#070b14] border border-white/10 overflow-hidden shadow-2xl">
          {/* Top Window Bar */}
          <div className="bg-[#0b1222] px-4 py-3 flex items-center justify-between border-b border-slate-800">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-sm shadow-red-500/50"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-sm shadow-yellow-500/50"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/90 shadow-sm shadow-green-500/50"></span>
              <span className="ml-3 text-[11px] font-mono text-slate-400 hidden sm:inline-flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                Mobin Workstation — Production IDE
              </span>
            </div>

            {/* Clickable Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab("flutter");
                }}
                className={`px-3 py-1 rounded-lg transition ${
                  activeTab === "flutter"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                OBIN_App.dart
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab("next");
                }}
                className={`px-3 py-1 rounded-lg transition ${
                  activeTab === "next"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ObinShop.tsx
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTab("ai");
                }}
                className={`px-3 py-1 rounded-lg transition ${
                  activeTab === "ai"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sync_Engine.py
              </button>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>LIVE</span>
            </div>
          </div>

          {/* Interactive Screen Code Area */}
          <div className="relative p-5 sm:p-7 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto min-h-[290px] bg-[#050811]">
            {/* Dynamic Glass Specular Reflection Effect that moves as you tilt */}
            <div
              className="screen-reflection absolute inset-0 pointer-events-none"
              style={{
                transform: `translateX(${rotate.y * 12}px) translateY(${rotate.x * 12}px)`,
                transition: "transform 0.1s ease-out",
              }}
            />

            <pre className="relative z-10 selection:bg-cyan-500/40">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>

          {/* Bottom Screen Status Bar */}
          <div className="bg-[#0b1222] px-4 py-2 border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-4">
              <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                PLAY STORE: v3.0.8 VERIFIED
              </span>
              <span className="hidden sm:inline">EDGE SSR: 12ms</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <span>UTF-8</span>
              <span className="text-indigo-400 font-semibold">ENGINE: MR MOBIN</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-slate-500 text-xs font-mono mt-3">
        ✦ Interactive 3D Display • Move your mouse across the screen to tilt • Click tabs to view architecture
      </p>
    </div>
  );
}

// ==========================================
// 3. 3D TILT CARD WRAPPER FOR PROJECTS
// ==========================================
function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.12s ease-out",
      }}
      className={`relative preserve-3d overflow-hidden ${className}`}
    >
      {/* Glare spotlight following cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(56, 189, 248, ${glare.opacity}), transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function Home() {
  const [copied, setCopied] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<
    { command: string; output: string }[]
  >([
    {
      command: "welcome",
      output:
        "Welcome to Mr Mobin Console v4.5. Type 'help' to inspect live capabilities.",
    },
  ]);

  // Smooth Animated Counters
  const [ytCount, setYtCount] = useState(0);
  const [tgCount, setTgCount] = useState(0);

  useEffect(() => {
    const endYt = 200;
    const endTg = 150;
    const duration = 1800;
    const startTime = performance.now();

    const animateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setYtCount(Math.floor(ease * endYt));
      setTgCount(Math.floor(ease * endTg));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("mobinyt420@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    switch (cmd) {
      case "help":
        response =
          "Commands: 'about', 'projects', 'automations', 'stats', 'contact', 'clear'";
        break;
      case "about":
        response =
          "Mr Mobin: AI-Native Full-Stack Software Engineer & Digital Creator. Crafts production Flutter mobile apps and high-speed Next.js systems.";
        break;
      case "projects":
        response =
          "1. OBIN - Gaming & Super Hub (Google Play Store v3.0.8 Live)\n2. OBIN Shop Platform (Next.js 15, obinshop.com)";
        break;
      case "automations":
        response =
          "Autonomous cloud data pipelines, real-time background sync daemons, AI UGC ad scripting & video engines, high-speed webhook workflows.";
        break;
      case "stats":
        response =
          "YouTube: 200,000+ Subscribers (4 Channels) | Telegram: 150,000+ Community Members | Play Store: v3.0.8 Live";
        break;
      case "contact":
        response =
          "Telegram: @MrMobin01 | Email: mobinyt420@gmail.com (Fast direct responses)";
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        response = `Command '${cmd}' not found. Type 'help' for options.`;
    }

    setTerminalHistory((prev) => [...prev, { command: terminalInput, output: response }]);
    setTerminalInput("");
  };

  const marqueeSkills = [
    "FLUTTER & DART",
    "NEXT.JS 15",
    "AI AUTOMATION",
    "GOOGLE PLAY APPROVED",
    "REACT 19",
    "AI UGC VIDEO CREATION",
    "ADMOB MONETIZATION",
    "FIREBASE BACKEND",
    "CLOUD SYNC WORKFLOWS",
    "TAILWIND CSS",
    "TYPESCRIPT",
    "200K+ AUDIENCE CREATOR",
  ];

  return (
    <div className="relative min-h-screen bg-[#030712] bg-grid-cyber text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* 1. Interactive Flowing Wind & Cosmic Particles */}
      <WindCanvas />

      {/* Dynamic Background Ambient Light Orbs */}
      <div className="fixed top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-cyan-600/20 via-indigo-600/15 to-transparent rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="fixed top-[45%] right-[-10%] w-[600px] h-[500px] bg-purple-600/15 rounded-full blur-[170px] pointer-events-none animate-float-slow" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[500px] bg-emerald-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Top Navigation */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-2xl px-5 py-3.5 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-2xl">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#080d1a] rounded-[11px] flex items-center justify-center font-black text-lg text-cyan-300">
                M
              </div>
            </div>
            <div>
              <div className="font-extrabold text-base tracking-tight text-white flex items-center gap-2">
                MR MOBIN
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-[11px] text-cyan-400 font-mono tracking-wide">AI-Native Engineer & Creator</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-slate-300">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#interactive-screen" className="hover:text-cyan-400 transition-colors">Studio</a>
            <a href="#stats" className="hover:text-cyan-400 transition-colors">Audience</a>
            <a href="#automations" className="hover:text-cyan-400 transition-colors">Automations</a>
            <a href="#terminal" className="hover:text-cyan-400 transition-colors">Console</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://t.me/MrMobin01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-cyan-500/25 transition transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let&apos;s Talk</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs sm:text-sm font-semibold shadow-inner shadow-cyan-500/20 animate-float">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Available for High-Impact App & AI Contracts</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span className="text-slate-400 text-xs font-mono">100% Verified Quality</span>
          </div>

          {/* Big Name Showcase */}
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-mono uppercase tracking-[0.35em] text-cyan-400/90 font-bold">
              Engineering The Future
            </h2>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white">
              <span className="gradient-name drop-shadow-2xl">MR MOBIN</span>
            </h1>
          </div>

          {/* Punchy Subheading */}
          <p className="text-lg sm:text-2xl font-medium text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Architecting <span className="text-cyan-400 font-bold">Production Flutter Apps</span>, High-Performance <span className="text-indigo-400 font-bold">Next.js Web Platforms</span> & Autonomous <span className="text-emerald-400 font-bold">AI Automations</span>.
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Developer and digital creator backed by a loyal <strong className="text-white">200K+ YouTube audience</strong> and <strong className="text-white">150K+ Telegram community</strong>. Taking ambitious digital ideas from zero to approved live production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm tracking-wide uppercase flex items-center gap-3 shadow-xl shadow-cyan-500/30 transition transform hover:-translate-y-1"
            >
              <Flame className="w-4 h-4 text-yellow-300" />
              <span>Explore Live Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://t.me/MrMobin01"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl glass-panel hover:bg-slate-800/80 border border-slate-700/80 text-slate-100 font-semibold text-sm flex items-center gap-2.5 transition transform hover:-translate-y-1"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Direct Telegram (@MrMobin01)</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-6 py-4 rounded-xl glass-panel hover:bg-slate-800/80 border border-slate-700/80 text-slate-200 font-medium text-sm flex items-center gap-2 transition"
              title="Copy Email"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2. Interactive 3D Computer Display Screen Widget */}
        <div id="interactive-screen">
          <InteractiveDeviceScreen />
        </div>

        {/* Live Animated Metric Counter Cards */}
        <div id="stats" className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10">
          {/* Card 1: YouTube */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-red-500/40 transition group glow-card-cyan">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400">YouTube</span>
              <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {ytCount}K<span className="text-red-500">+</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium">Subscribers Across 4 Channels</p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-red-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              MR Mobin 1M • Prime Mobin
            </div>
          </div>

          {/* Card 2: Telegram */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-blue-500/40 transition group glow-card-cyan">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400">Telegram</span>
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {tgCount}K<span className="text-blue-400">+</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium">Active Community Members</p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-blue-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Daily Tech & App Network
            </div>
          </div>

          {/* Card 3: Google Play Production */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-emerald-500/40 transition group glow-card-cyan">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400">Google Play</span>
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              v3.0.8
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium">Approved & Live Production</p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              OBIN Gaming & Super Hub
            </div>
          </div>

          {/* Card 4: Quality & Speed */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-purple-500/40 transition group glow-card-purple">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-400">Speed & AI</span>
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition">
                <Zap className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              100<span className="text-purple-400">%</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium">Production Delivery Track</p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-purple-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              AI-Accelerated Execution
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Skills Marquee */}
      <div className="py-6 border-y border-white/5 bg-slate-950/40 overflow-hidden">
        <div className="animate-marquee flex items-center gap-8">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="hover:text-cyan-300 transition-colors">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Featured Public Projects Showcase with 3D Tilt Cards */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
            <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>Public Flagship Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Live Proven <span className="gradient-name">Software In Production</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Real products built from scratch, published live, and serving active users with verified stability.
          </p>
        </div>

        {/* 2 Flagship Project Cards with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: OBIN Mobile App */}
          <TiltCard className="glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col justify-between group bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border bg-emerald-500/15 text-emerald-400 border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                  Google Play Live • v3.0.8
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  Approved Production App
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                OBIN — Gaming & Super Hub
              </h3>
              <p className="text-xs font-mono text-cyan-400 mb-4">Google Play Store Approved Production App</p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Flagship mobile utility application approved and published live on the Google Play Store. Engineered with Flutter & Dart for ultra-smooth 60fps performance. Integrates Google AdMob monetization, real-time Firebase authentication, external bKash payment redirection, and secure GDPR-compliant user account deletion.
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Flutter 3.x", "Dart", "Google Play Store", "AdMob SDK", "Firebase Auth", "Firestore"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 text-slate-300 text-xs font-mono border border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mobinx.gaming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 transition transform hover:scale-105"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>View on Google Play</span>
                </a>

                <a
                  href="https://obinapp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl glass-panel hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Official Portal</span>
                </a>
              </div>

              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Live
              </span>
            </div>
          </TiltCard>

          {/* Card 2: OBIN Shop Web Platform */}
          <TiltCard className="glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col justify-between group bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border bg-cyan-500/15 text-cyan-400 border-cyan-500/30">
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                  Next.js 15 • Edge Deployed
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  Live Global Edge
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                OBIN Shop Web Platform
              </h3>
              <p className="text-xs font-mono text-cyan-400 mb-4">Modern High-Performance E-Commerce & Service Hub</p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                High-concurrency, lightning-fast digital platform for the OBIN ecosystem. Built using Next.js 15, React 19, and Tailwind CSS. Features instant server-side page rendering, SEO optimization, responsive dark aesthetic, and seamless cross-platform syncing with the mobile application.
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel Edge", "REST API"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 text-slate-300 text-xs font-mono border border-slate-700/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://obinapp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25 transition transform hover:scale-105"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Platform</span>
                </a>

                <a
                  href="https://obinapp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl glass-panel hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition"
                >
                  <span>Domain: obinshop.com</span>
                </a>
              </div>

              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Live
              </span>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Automations & Core Engineering Capabilities */}
      <section id="automations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-mono text-cyan-400 font-bold">
            Engineering & Automation
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            What I Deliver for <span className="gradient-name">Clients & Businesses</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            End-to-end software engineering combining mobile, web, and automated AI growth systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="glass-panel rounded-2xl p-7 border border-slate-800 hover:border-cyan-500/40 transition group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Flutter Mobile Engineering</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Cross-platform iOS and Android apps with 60fps animations, Firebase authentication, AdMob revenue setups, and seamless Google Play approval compliance.
            </p>
            <ul className="text-xs font-mono text-cyan-300 space-y-1.5">
              <li className="flex items-center gap-2">✓ Google Play 14-day Testing & Release</li>
              <li className="flex items-center gap-2">✓ AdMob & In-App Monetization</li>
              <li className="flex items-center gap-2">✓ Clean State Management & Firebase</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="glass-panel rounded-2xl p-7 border border-slate-800 hover:border-indigo-500/40 transition group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Next.js Web Platforms</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              High-concurrency modern web applications powered by Next.js 15, React 19, and Tailwind CSS. Built for sub-second load times and global Vercel edge reliability.
            </p>
            <ul className="text-xs font-mono text-indigo-300 space-y-1.5">
              <li className="flex items-center gap-2">✓ Next.js 15 & React 19 Architecture</li>
              <li className="flex items-center gap-2">✓ SEO & Edge SSR Performance</li>
              <li className="flex items-center gap-2">✓ REST & Webhook Integrations</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="glass-panel rounded-2xl p-7 border border-slate-800 hover:border-purple-500/40 transition group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Automations & UGC Growth</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Custom AI pipelines that automate business workflows, sync cloud databases 24/7, and generate high-converting AI UGC video ads for digital campaigns.
            </p>
            <ul className="text-xs font-mono text-purple-300 space-y-1.5">
              <li className="flex items-center gap-2">✓ 24/7 Cloud Background Sync Daemons</li>
              <li className="flex items-center gap-2">✓ AI UGC Video Ads & Viral Scripting</li>
              <li className="flex items-center gap-2">✓ Telegram Bot & Google Sheet Automations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Developer Interactive Console */}
      <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5">
        <div className="text-center mb-10 space-y-2">
          <div className="text-xs uppercase tracking-widest font-mono text-cyan-400 font-bold">
            Interactive System Console
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Developer <span className="gradient-name">Terminal</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Type <code className="text-cyan-300 bg-slate-900 px-2 py-0.5 rounded font-mono">about</code>, <code className="text-cyan-300 bg-slate-900 px-2 py-0.5 rounded font-mono">projects</code>, <code className="text-cyan-300 bg-slate-900 px-2 py-0.5 rounded font-mono">automations</code>, or <code className="text-cyan-300 bg-slate-900 px-2 py-0.5 rounded font-mono">contact</code>.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#070b14] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Console Header */}
          <div className="bg-[#0e1424] px-4 py-3 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-slate-400 text-xs ml-2 flex items-center gap-1.5 font-sans font-medium">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> mobin@architect:~ (bash)
              </span>
            </div>
            <span className="text-slate-500 text-xs">v4.5.0</span>
          </div>

          {/* Console Logs */}
          <div className="p-5 max-h-64 overflow-y-auto space-y-3">
            {terminalHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400 font-bold">mobin@dev:~$</span>
                  <span>{item.command}</span>
                </div>
                <div className="text-slate-300 whitespace-pre-wrap pl-4 border-l border-cyan-500/30">
                  {item.output}
                </div>
              </div>
            ))}
          </div>

          {/* Console Input */}
          <form onSubmit={handleTerminalSubmit} className="p-4 bg-[#050810] border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 font-bold">mobin@dev:~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="type 'help' and press Enter..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600 font-mono text-xs sm:text-sm"
            />
          </form>
        </div>
      </section>

      {/* Contact Section (STRICTLY Email & Telegram, NO GitHub) */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest font-mono text-cyan-400 font-bold">
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Let&apos;s Build Something <span className="gradient-name">Extraordinary</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Have a mobile app, web application, or AI automation project? Reach out directly for fast response.
          </p>
        </div>

        {/* 2 Big Direct Contact Cards (NO GITHUB) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Telegram Card */}
          <a
            href="https://t.me/MrMobin01"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-cyan-500/50 transition group flex flex-col items-center text-center glow-card-cyan transform hover:-translate-y-1.5"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition">
              <Send className="w-8 h-8" />
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Fastest Response Time
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Telegram</h3>
            <p className="text-xs text-slate-400 mb-4">Direct personal messaging</p>
            <div className="text-base font-bold text-cyan-300 group-hover:text-cyan-200 transition">
              @MrMobin01
            </div>
          </a>

          {/* Email Card */}
          <div
            onClick={copyEmail}
            className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-indigo-500/50 transition group flex flex-col items-center text-center glow-card-purple transform hover:-translate-y-1.5 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition">
              <Mail className="w-8 h-8" />
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-3">
              <Check className="w-3.5 h-3.5" />
              Official Business Inbox
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">Email</h3>
            <p className="text-xs text-slate-400 mb-4">Click to copy address</p>
            <div className="text-base font-bold text-indigo-300 group-hover:text-indigo-200 transition truncate max-w-full">
              mobinyt420@gmail.com
            </div>
            <span className="text-[11px] font-mono text-slate-500 mt-2">
              {copied ? "✓ Copied to clipboard!" : "Click to copy"}
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-cyan-400">
            M
          </div>
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">Mr Mobin</strong>. All Rights Reserved.
          </div>
        </div>

        <div className="flex items-center gap-6 font-mono text-[11px]">
          <a
            href="https://play.google.com/store/apps/details?id=com.mobinx.gaming"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            OBIN on Google Play
          </a>
          <a
            href="https://obinapp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            OBIN Web
          </a>
          <a
            href="https://t.me/MrMobin01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            Telegram: @MrMobin01
          </a>
        </div>
      </footer>
    </div>
  );
}
