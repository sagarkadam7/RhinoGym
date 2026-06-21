import Image from "next/image";
import { facilities } from "@/lib/constants";

export default function Facility() {
  return (
    <section id="facility" className="section-padding bg-rhino-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rhino-orange/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-rhino-orange text-sm tracking-[0.3em] uppercase mb-4 block">
              The Facility
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider leading-none mb-6">
              PREMIUM
              <br />
              <span className="gradient-text">GRIT & GLORY</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              Step into 5,000+ sq ft of industrial-chic training space. White walls,
              exposed ceilings, warm accent lighting, and equipment that matches your
              ambition.
            </p>

            <div className="relative aspect-video rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"
                alt="Rhino Gym facility interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {facilities.map((facility, i) => (
              <div
                key={facility.title}
                className="bg-rhino-gray border border-white/5 p-6 card-hover"
              >
                <span className="font-display text-4xl text-rhino-orange/30 block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl tracking-wider mb-2">
                  {facility.title.toUpperCase()}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
