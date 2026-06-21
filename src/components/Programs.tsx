"use client";

import { Dumbbell, Flame, Target, Heart } from "lucide-react";
import { programs } from "@/lib/constants";

const iconMap = {
  dumbbell: Dumbbell,
  flame: Flame,
  target: Target,
  heart: Heart,
};

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-rhino-black relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rhino-orange text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Programs
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider leading-none mb-6">
            TRAIN WITH
            <br />
            <span className="gradient-text">PURPOSE</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Whether you&apos;re building strength, crushing conditioning, or optimizing
            performance — we have the program and the coaches to get you there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program) => {
            const Icon = iconMap[program.icon as keyof typeof iconMap];
            return (
              <div
                key={program.title}
                className="group relative bg-rhino-gray border border-white/5 p-8 md:p-10 card-hover overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-rhino-orange/5 rounded-full blur-2xl group-hover:bg-rhino-orange/10 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center bg-rhino-orange/10 border border-rhino-orange/20 mb-6 group-hover:bg-rhino-orange/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-rhino-orange" />
                  </div>

                  <h3 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
                    {program.title.toUpperCase()}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-white/50"
                      >
                        <span className="w-1.5 h-1.5 bg-rhino-orange rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
