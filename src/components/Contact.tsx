"use client";

import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-rhino-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rhino-orange/30 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-rhino-orange text-sm tracking-[0.3em] uppercase mb-4 block">
              Contact
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider leading-none mb-6">
              VISIT
              <br />
              <span className="gradient-text">THE CLUB</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
              Ready to lock into the task? Drop by for a free tour or reach out to us
              directly. We&apos;re located in Bhugaon, right next to Cocorico.
            </p>

            <div className="space-y-6">
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-rhino-orange/10 border border-rhino-orange/20 shrink-0 group-hover:bg-rhino-orange/20 transition-colors">
                  <MapPin className="w-5 h-5 text-rhino-orange" />
                </div>
                <div>
                  <span className="text-xs tracking-wider uppercase text-rhino-muted block mb-1">
                    Location
                  </span>
                  <span className="text-white group-hover:text-rhino-orange transition-colors">
                    {siteConfig.address.full}
                  </span>
                </div>
              </a>

              <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-rhino-orange/10 border border-rhino-orange/20 shrink-0 group-hover:bg-rhino-orange/20 transition-colors">
                  <Phone className="w-5 h-5 text-rhino-orange" />
                </div>
                <div>
                  <span className="text-xs tracking-wider uppercase text-rhino-muted block mb-1">
                    Phone
                  </span>
                  <span className="text-white group-hover:text-rhino-orange transition-colors">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-rhino-orange/10 border border-rhino-orange/20 shrink-0 group-hover:bg-rhino-orange/20 transition-colors">
                  <Mail className="w-5 h-5 text-rhino-orange" />
                </div>
                <div>
                  <span className="text-xs tracking-wider uppercase text-rhino-muted block mb-1">
                    Email
                  </span>
                  <span className="text-white group-hover:text-rhino-orange transition-colors">
                    {siteConfig.email}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-rhino-orange/10 border border-rhino-orange/20 shrink-0">
                  <Clock className="w-5 h-5 text-rhino-orange" />
                </div>
                <div>
                  <span className="text-xs tracking-wider uppercase text-rhino-muted block mb-1">
                    Hours
                  </span>
                  <span className="text-white block">
                    Mon–Fri: {siteConfig.hours.weekdays}
                  </span>
                  <span className="text-white/60 block">
                    Sat–Sun: {siteConfig.hours.weekends}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I'd like to know more about Rhino Gym membership.`}
                external
              >
                WhatsApp Us
              </Button>
              <Button href={siteConfig.instagram} variant="outline" external>
                <Instagram size={18} />
                {siteConfig.instagramHandle}
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-rhino-gray border border-white/5 p-8 md:p-10">
            <h3 className="font-display text-3xl tracking-wider mb-2">
              BOOK A FREE TOUR
            </h3>
            <p className="text-sm text-white/50 mb-8">
              Fill in your details and we&apos;ll get back to you within 24 hours.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const name = data.get("name");
                const phone = data.get("phone");
                const message = data.get("message");
                const text = encodeURIComponent(
                  `Hi! I'm ${name}. Phone: ${phone}. ${message}`
                );
                window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
              }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-xs tracking-wider uppercase text-rhino-muted block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-rhino-black border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-rhino-orange focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs tracking-wider uppercase text-rhino-muted block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-rhino-black border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-rhino-orange focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs tracking-wider uppercase text-rhino-muted block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-rhino-black border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-rhino-orange focus:outline-none transition-colors resize-none"
                  placeholder="I'm interested in..."
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-16 aspect-[21/9] md:aspect-[21/7] bg-rhino-gray border border-white/5 overflow-hidden relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.75!3d18.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI4JzQ4LjAiTiA3M8KwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rhino Gym Location - Bhugaon, Pune"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 pointer-events-none border border-rhino-orange/10" />
        </div>
      </div>
    </section>
  );
}
