"use client";

import Image from "next/image";
import { siteConfig, stats } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="section-padding bg-rhino-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rhino-orange/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fe2ee61b?w=800&q=80"
                alt="Athlete training at Rhino Gym"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rhino-black/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-rhino-orange p-6 md:p-8">
              <span className="font-display text-5xl md:text-6xl text-white leading-none block">
                100+
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/80">
                Active Members
              </span>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-rhino-orange/20 -z-10" />
          </div>

          {/* Text side */}
          <div>
            <span className="text-rhino-orange text-sm tracking-[0.3em] uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider leading-none mb-6">
              BUILT FOR
              <br />
              <span className="gradient-text">SERIOUS TRAINING</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              {siteConfig.name} is Pune&apos;s destination for athletes who refuse to
              settle. Located in {siteConfig.address.full}, we&apos;ve created an
              industrial-chic training space where chalk meets commitment and every rep
              counts.
            </p>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
              From power racks to performance coaching, our facility is equipped with
              premium Shua machines and everything you need to push past your limits.
              This isn&apos;t just a gym — it&apos;s a space built for focused training.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-2 border-rhino-orange pl-4"
                >
                  <span className="font-display text-3xl md:text-4xl text-white block">
                    {stat.value}
                  </span>
                  <span className="text-xs tracking-wider uppercase text-rhino-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
