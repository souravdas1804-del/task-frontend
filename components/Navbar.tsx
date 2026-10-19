"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Sourav Das
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className={`transition hover:text-blue-400 ${
              pathname === "/" ? "text-blue-400" : "text-slate-300"
            }`}
          >
            Portfolio Home
          </Link>
          <Link href="/#about" className="text-slate-300 hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/#experience" className="text-slate-300 hover:text-blue-400 transition">
            Experience
          </Link>
          <Link href="/#skills" className="text-slate-300 hover:text-blue-400 transition">
            Skills
          </Link>
          <Link href="/#certifications" className="text-slate-300 hover:text-blue-400 transition">
            Certifications
          </Link>

          {/* Live Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition ${
                pathname.startsWith("/projects")
                  ? "border-blue-500/50 bg-blue-500/10 text-blue-400"
                  : "border-slate-700 bg-slate-800/60 text-slate-200 hover:border-slate-600"
              }`}
            >
              <span>Live Projects</span>
              <svg
                className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-2 z-50">
                <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Full-Stack Apps
                </div>
                <Link
                  href="/projects/task-tracker"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-blue-400 transition"
                >
                  <div className="font-medium flex items-center justify-between">
                    Task Tracker
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      Live
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Next.js + FastAPI + Neon DB
                  </div>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3 text-sm">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 py-1">
            Portfolio Home
          </Link>
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 py-1">
            About
          </Link>
          <Link href="/#experience" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 py-1">
            Experience
          </Link>
          <Link href="/#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 py-1">
            Skills
          </Link>
          <Link href="/#certifications" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 py-1">
            Certifications
          </Link>
          <div className="pt-2 border-t border-slate-800">
            <span className="text-xs font-semibold uppercase text-slate-500">Live Projects</span>
            <Link
              href="/projects/task-tracker"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-2 text-blue-400 font-medium py-1"
            >
              → Task Tracker (FastAPI + Next.js)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}