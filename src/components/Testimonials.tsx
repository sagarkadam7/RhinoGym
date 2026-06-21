"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding bg-rhino-black relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-rhino-orange text-sm tracking-[0.3em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider leading-none">
            WHAT MEMBERS
            <br />
            <span className="gradient-text">ARE SAYING</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="w-12 h-12 text-rhino-orange/20 absolute -top-4 left-0" />

          <div className="min-h-[200px] flex items-center">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === current
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed font-light text-center px-4 md:px-12">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="text-center mt-8">
                  <span className="font-display text-xl tracking-wider text-white block">
                    {testimonial.name.toUpperCase()}
                  </span>
                  <span className="text-sm text-rhino-muted tracking-wider">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 border border-white/10 hover:border-rhino-orange hover:text-rhino-orange transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-rhino-orange" : "bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 border border-white/10 hover:border-rhino-orange hover:text-rhino-orange transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
