"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-rhino-black/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white ring-2 ring-transparent group-hover:ring-rhino-orange transition-all duration-300">
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              fill
              className="object-cover p-1"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-2xl tracking-wider leading-none block">
              RHINO
            </span>
            <span className="text-[10px] tracking-[0.3em] text-rhino-muted uppercase">
              Fitness Club
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-widest uppercase text-white/70 hover:text-rhino-orange transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <Button href={siteConfig.instagram} variant="outline" size="sm" external>
            Follow Us
          </Button>
          <Button href="#membership" size="sm">
            Join Now
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:text-rhino-orange transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 bg-rhino-black/98 backdrop-blur-lg z-40 lg:hidden transition-all duration-500 flex flex-col",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <Link
            href="#home"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white">
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                fill
                className="object-cover p-1"
              />
            </div>
            <span className="font-display text-2xl tracking-wider">RHINO</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-white"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-4xl tracking-widest text-white hover:text-rhino-orange transition-colors duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-8 w-full max-w-xs px-6">
            <Button href="#membership" size="lg" className="w-full">
              Join Now
            </Button>
            <Button
              href={siteConfig.instagram}
              variant="outline"
              size="lg"
              className="w-full"
              external
            >
              Follow on Instagram
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
