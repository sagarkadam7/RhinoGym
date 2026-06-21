"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { siteConfig, motivationalQuotes } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Rhino Gym training floor"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rhino-black/80 via-rhino-black/60 to-rhino-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-rhino-black/70 via-transparent to-rhino-black/70" />
      </div>

      {/* Orange accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rhino-orange to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-24 pb-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-rhino-orange/30 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-rhino-orange rounded-full animate-pulse" />
          <span className="text-xs tracking-[0.25em] uppercase text-rhino-orange">
            Bhugaon, Pune
          </span>
        </div>

        <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] tracking-wider mb-4 animate-fade-up">
          <span className="block text-white">RHINO</span>
          <span className="block gradient-text">FITNESS CLUB</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-4 font-light tracking-wide animate-fade-up">
          {siteConfig.tagline}
        </p>

        <div className="flex items-center justify-center gap-3 mb-10 animate-fade-up">
          {siteConfig.pillars.map((pillar, i) => (
            <span key={pillar} className="flex items-center gap-3">
              <span className="text-sm md:text-base tracking-[0.2em] uppercase text-white/50">
                {pillar}
              </span>
              {i < siteConfig.pillars.length - 1 && (
                <span className="text-rhino-orange">•</span>
              )}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <Button href="#membership" size="lg">
            Start Your Journey
          </Button>
          <Button href="#about" variant="outline" size="lg">
            Explore The Gym
          </Button>
        </div>

        {/* Motivational ticker */}
        <div className="mt-16 overflow-hidden">
          <div className="flex marquee-track whitespace-nowrap">
            {[...motivationalQuotes, ...motivationalQuotes, ...motivationalQuotes].map(
              (quote, i) => (
                <span
                  key={i}
                  className="font-display text-2xl md:text-3xl tracking-[0.3em] text-white/10 mx-8"
                >
                  {quote}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-rhino-orange transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
