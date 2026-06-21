"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-rhino-black">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-rhino-orange text-sm tracking-[0.3em] uppercase mb-4 block">
              Gallery
            </span>
            <h2 className="font-display text-5xl md:text-6xl tracking-wider leading-none">
              INSIDE THE
              <br />
              <span className="gradient-text">ARENA</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm md:text-base">
            A glimpse into the space where champions are forged. Follow us on Instagram
            for daily training content.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className={cn(
                "relative overflow-hidden group cursor-pointer rounded-sm",
                image.span === "large" ? "col-span-2 row-span-2" : "col-span-1"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={
                  image.span === "large"
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
              />
              <div className="absolute inset-0 bg-rhino-black/0 group-hover:bg-rhino-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs tracking-wider uppercase text-white/80">
                  {image.alt}
                </span>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 border border-rhino-orange/0 group-hover:border-rhino-orange/60 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
