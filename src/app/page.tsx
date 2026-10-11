"use client";

import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Globe,
  Bot,
  Zap,
  Terminal,
  ExternalLink,
  Github,
  Mail,
  Send,
  CheckCircle,
  Copy,
  Youtube,
  Users,
  Award,
  ArrowRight,
  Code2,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Play,
  Briefcase,
  MessageSquare
} from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<
    { command: string; output: string }[]
  >([
    {
      command: "welcome",
      output:
        "Welcome to Mobin OS v3.2. Type 'help' to explore available commands.",
    },
  ]);
  const [activeTab, setActiveTab] = useState<"all" | "apps" | "web" | "ai">("all");

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
          "Available commands: 'about', 'projects', 'skills', 'stats', 'contact', 'clear'";
        break;
      case "about":
        response =
          "Mr Mobin: AI-Native Software Engineer & Creator from Bangladesh. Specializes in Flutter, Next.js, and automated AI systems.";
        break;
      case "projects":
        response =
          "1. OBIN - Gaming & Super Hub (Play Store v3.0.8 Live)\n2. Finance OS (Next.js 16 + React 19)\n3. 24/7 Cloud Sync Bot (Render + Telegram)\n4. OBIN Portal (obinapp.vercel.app)";
        break;
      case "skills":
        response =
          "Flutter/Dart, Next.js, React, Tailwind CSS, Firebase, Node.js, AI UGC Video Creation, AdMob Monetization, Play Console Publishing";
        break;
      case "stats":
        response =
          "YouTube: 200,000+ Subs across 4 channels | Telegram: 150,000+ Members | Google Play: Approved Live";
        break;
      case "contact":
        response =
          "Email: mobinyt420@gmail.com | Telegram: @MrMobin01 | GitHub: mobinyt420-creator";
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        response = `Command not recognized: '${cmd}'. Type 'help' for options.`;
    }

    setTerminalHistory((prev) => [...prev, { command: terminalInput, output: response }]);
    setTerminalInput("");
  };

  const projects = [
    {
      id: "obin-app",
      title: "OBIN - Gaming & Super Hub",
      category: "apps",
      badge: "Google Play Verified • v3.0.8",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      description:
        "Flagship mobile application approved on Google Play Store. Features real-time gaming services, Google AdMob monetization, Firebase authentication, external bKash payment redirection, and secure account deletion flow.",
      tech: ["Flutter", "Dart", "Firebase", "Google AdMob", "Google Play API"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.mobinx.gaming",
      webUrl: "https://obinapp.vercel.app/",
      featured: true,
      stats: "Live on Play Store",
    },
    {
      id: "finance-os",
      title: "Finance OS & Multi-Currency Platform",
      category: "web",
      badge: "Production SaaS",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      description:
        "Full-stack high-speed personal and enterprise finance management web application. Built with Next.js 16, React 19, and Tailwind CSS. Supports multi-currency tracking (BDT & USD), real-time net-worth analytics, and transaction ledgers.",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Analytics"],
      webUrl: "https://obinapp.vercel.app/",
      featured: true,
      stats: "Modern Next.js 16 Architecture",
    },
    {
      id: "cloud-bot",
      title: "24/7 Cloud Automation Sync Bot",
      category: "ai",
      badge: "Render.com Daemon",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      description:
        "Continuous automated cloud bot running on Render. Synchronizes real-time Telegram orders with Google Sheets database, dispatches instant notifications, and handles inventory tracking automatically with zero downtime.",
      tech: ["Node.js", "Render Cloud", "Telegram Bot API", "Google Sheets API"],
      webUrl: "https://t.me/MrMobin01",
      featured: false,
      stats: "99.9% Uptime 24/7",
    },
    {
      id: "obin-web",
      title: "OBIN Official Web Portal & Compliance Hub",
      category: "web",
      badge: "Live on Vercel",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      description:
        "Official verified landing portal for OBIN. Engineered for Google AdMob crawler compliance (app-ads.txt), GDPR/Play Store privacy policy requirements, and dynamic app release showcases.",
      tech: ["Next.js", "Vercel Edge", "DNS Config", "SEO Optimized"],
      webUrl: "https://obinapp.vercel.app/",
      featured: false,
      stats: "Crawler Verified",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="relative min-h-screen bg-[#07090e] bg-grid-pattern text-slate-100 overflow-x-hidden">
      {/* Ambient background glow orbs */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-[40%] right-[-5%] w-[500px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[400px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#07090e]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center font-bold text-lg text-cyan-400">
                M
              </div>
            </div>
            <div>
              <div className="font-extrabold text-lg tracking-tight text-white flex items-center gap-2">
                Mr Mobin
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">AI & Flutter Engineer</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Tech Stack</a>
            <a href="#creator" className="hover:text-cyan-400 transition">Creator Stats</a>
            <a href="#terminal" className="hover:text-cyan-400 transition">Terminal</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://t.me/MrMobin01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold transition shadow-sm hover:shadow-cyan-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Hire on Telegram</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-inner shadow-cyan-500/20">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Available for Upwork / Fiverr Freelance & App Projects</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Architecting <span className="gradient-text">Production Apps</span> & Next-Gen <span className="gradient-text-emerald">AI Experiences</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m <strong className="text-white">Mr Mobin</strong>, a full-stack engineer and digital creator with over <span className="text-cyan-300 font-semibold">200k+ audience</span>. I build Google Play verified Flutter apps, high-performance Next.js platforms, and scalable automated cloud workflows.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold flex items-center gap-2.5 shadow-lg shadow-cyan-500/25 transition transform hover:-translate-y-0.5"
            >
              <span>Explore Live Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://t.me/MrMobin01"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold flex items-center gap-2.5 transition transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Direct Telegram Chat</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium flex items-center gap-2 transition"
              title="Copy Email"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span className="text-sm">Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Metric Badges Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 text-left">
            <div className="glass-card rounded-2xl p-5 border border-slate-800">
              <div className="flex items-center gap-3 text-cyan-400 mb-2">
                <Smartphone className="w-5 h-5" />
                <span className="text-xs uppercase font-mono font-semibold text-slate-400">Play Store</span>
              </div>
              <div className="text-2xl font-bold text-white">Live & Verified</div>
              <p className="text-xs text-slate-400 mt-1">OBIN App v3.0.8 Approved</p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-slate-800">
              <div className="flex items-center gap-3 text-red-400 mb-2">
                <Youtube className="w-5 h-5" />
                <span className="text-xs uppercase font-mono font-semibold text-slate-400">YouTube</span>
              </div>
              <div className="text-2xl font-bold text-white">200K+ Subs</div>
              <p className="text-xs text-slate-400 mt-1">Across 4 Tech Channels</p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-slate-800">
              <div className="flex items-center gap-3 text-blue-400 mb-2">
                <Users className="w-5 h-5" />
                <span className="text-xs uppercase font-mono font-semibold text-slate-400">Community</span>
              </div>
              <div className="text-2xl font-bold text-white">150K+ Active</div>
              <p className="text-xs text-slate-400 mt-1">Telegram Tech Network</p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-slate-800">
              <div className="flex items-center gap-3 text-emerald-400 mb-2">
                <Zap className="w-5 h-5" />
                <span className="text-xs uppercase font-mono font-semibold text-slate-400">Speed</span>
              </div>
              <div className="text-2xl font-bold text-white">AI-Accelerated</div>
              <p className="text-xs text-slate-400 mt-1">3x Faster Time to Market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest font-mono text-cyan-400 font-semibold mb-2">
              Portfolio & Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Proven <span className="gradient-text">Production Software</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
            {(["all", "apps", "web", "ai"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                  activeTab === tab
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab === "all" ? "All Projects" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-7 border border-slate-800 flex flex-col justify-between group transition hover:-translate-y-1 duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {project.stats}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Google Play</span>
                    </a>
                  )}

                  {project.webUrl && (
                    <a
                      href={project.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <span className="text-xs font-mono text-slate-400">
                  Production Ready
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack & Capabilities */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-mono text-cyan-400 font-semibold mb-2">
            Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Modern Tech Stack & <span className="gradient-text">AI Arsenal</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base">
            Equipped with battle-tested frameworks to take mobile and web ideas from blank canvas to production scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Mobile App Dev */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Mobile Apps (Flutter & Dart)</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Native-speed cross-platform apps with beautiful fluid animations, Google Play Store compliance, in-app purchases, and AdMob monetization.
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono text-cyan-300">
              <span className="bg-cyan-950/40 px-2 py-1 rounded">Flutter 3.x</span>
              <span className="bg-cyan-950/40 px-2 py-1 rounded">Dart</span>
              <span className="bg-cyan-950/40 px-2 py-1 rounded">Firebase</span>
              <span className="bg-cyan-950/40 px-2 py-1 rounded">Google Play</span>
              <span className="bg-cyan-950/40 px-2 py-1 rounded">AdMob SDK</span>
            </div>
          </div>

          {/* Card 2: Full-Stack Web Dev */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Full-Stack Web (Next.js & React)</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Lightning-fast server-rendered web platforms, REST/GraphQL API integration, responsive Tailwind interfaces, and edge deployments on Vercel.
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono text-indigo-300">
              <span className="bg-indigo-950/40 px-2 py-1 rounded">Next.js 15/16</span>
              <span className="bg-indigo-950/40 px-2 py-1 rounded">React 19</span>
              <span className="bg-indigo-950/40 px-2 py-1 rounded">TypeScript</span>
              <span className="bg-indigo-950/40 px-2 py-1 rounded">Tailwind CSS</span>
              <span className="bg-indigo-950/40 px-2 py-1 rounded">Node.js</span>
            </div>
          </div>

          {/* Card 3: AI & Growth Systems */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Systems & Digital Media</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              AI-native workflow execution, autonomous cloud sync bots on Render, UGC AI video ad generation, and hyper-targeted digital media growth.
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs font-mono text-purple-300">
              <span className="bg-purple-950/40 px-2 py-1 rounded">AI UGC Ads</span>
              <span className="bg-purple-950/40 px-2 py-1 rounded">Cloud Bots</span>
              <span className="bg-purple-950/40 px-2 py-1 rounded">Render.com</span>
              <span className="bg-purple-950/40 px-2 py-1 rounded">Sheets API</span>
              <span className="bg-purple-950/40 px-2 py-1 rounded">Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Creator & Community Section */}
      <section id="creator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-xs uppercase tracking-widest font-mono text-cyan-400 font-semibold">
              Influence & Community
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              A Creator with <span className="gradient-text">Real Audience</span> & Massive Reach
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Beyond engineering, I create high-impact tech tutorials, AI workflows, and digital products. With over <strong className="text-white">200,000+ subscribers</strong> across my YouTube ecosystem and an active <strong className="text-white">150,000+ Telegram network</strong>, I understand what users truly engage with.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>YouTube Channels: <strong className="text-white">MR Mobin 1M</strong>, <strong className="text-white">Prime Mobin</strong>, <strong className="text-white">Mobin IQ</strong>, <strong className="text-white">Build With Mobin</strong></span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Specialized in AI UGC Video Ads, viral scripting, and retention editing</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Direct community feedback loop for testing and improving apps rapidly</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">YouTube Audience</div>
                  <p className="text-xs text-slate-400">Total Ecosystem Reach</p>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-red-400">200K+</div>
            </div>

            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Telegram Network</div>
                  <p className="text-xs text-slate-400">Active Daily Members</p>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-blue-400">150K+</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Google Play Production</div>
                  <p className="text-xs text-slate-400">OBIN Live App Version</p>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-emerald-400">v3.0.8</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Terminal Section */}
      <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-widest font-mono text-cyan-400 font-semibold mb-2">
            Interactive CLI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Mobin Developer <span className="gradient-text">Console</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Try typing commands like <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded">about</code>, <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded">projects</code>, <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded">skills</code>, or <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded">contact</code>.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#0c101c] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Terminal Window Header */}
          <div className="bg-[#141b2e] px-4 py-3 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-slate-400 text-xs ml-2 flex items-center gap-1.5 font-sans">
                <Terminal className="w-3.5 h-3.5" /> mobin@workstation:~ (bash)
              </span>
            </div>
            <span className="text-slate-500 text-xs">v3.2.0</span>
          </div>

          {/* Terminal Logs */}
          <div className="p-5 max-h-72 overflow-y-auto space-y-3">
            {terminalHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400">mobin@dev:~$</span>
                  <span>{item.command}</span>
                </div>
                <div className="text-slate-300 whitespace-pre-wrap pl-4 border-l border-slate-800">
                  {item.output}
                </div>
              </div>
            ))}
          </div>

          {/* Input line */}
          <form onSubmit={handleTerminalSubmit} className="p-4 bg-[#0a0e19] border-t border-slate-800/80 flex items-center gap-2">
            <span className="text-emerald-400 font-bold">mobin@dev:~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="type 'help' and press Enter..."
              className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600 font-mono"
            />
          </form>
        </div>
      </section>

      {/* Contact & Hire Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-mono text-cyan-400 font-semibold mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let&apos;s Build Your Next <span className="gradient-text">Breakthrough App</span>
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            Have a project for Upwork, Fiverr, or a direct custom contract? Reach out directly via Telegram or Email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Telegram Card */}
          <a
            href="https://t.me/MrMobin01"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition">
              <Send className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Telegram</h3>
            <p className="text-xs text-slate-400 mb-3">Fastest response time</p>
            <div className="text-sm font-semibold text-cyan-300">@MrMobin01</div>
          </a>

          {/* Email Card */}
          <div
            onClick={copyEmail}
            className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition group flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Email</h3>
            <p className="text-xs text-slate-400 mb-3">For business inquiries</p>
            <div className="text-sm font-semibold text-indigo-300 truncate max-w-full">
              mobinyt420@gmail.com
            </div>
            <span className="text-[11px] text-slate-500 mt-2">
              {copied ? "Copied to clipboard!" : "Click to copy"}
            </span>
          </div>

          {/* GitHub Card */}
          <a
            href="https://github.com/mobinyt420-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-purple-500/40 transition group flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition">
              <Github className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
            <p className="text-xs text-slate-400 mb-3">Open-source & repositories</p>
            <div className="text-sm font-semibold text-purple-300">@mobinyt420-creator</div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} Mr Mobin. Built with Next.js, React 19 & Tailwind CSS.
        </div>
        <div className="flex items-center gap-6">
          <a href="https://play.google.com/store/apps/details?id=com.mobinx.gaming" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            OBIN on Google Play
          </a>
          <a href="https://obinapp.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            OBIN Web
          </a>
          <a href="https://t.me/MrMobin01" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            Telegram
          </a>
        </div>
      </footer>
    </div>
  );
}
