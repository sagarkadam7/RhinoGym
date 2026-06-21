import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-rhino-black border-t border-white/5">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/logo.png"
                  alt={siteConfig.name}
                  fill
                  className="object-cover p-1"
                />
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider leading-none block">
                  RHINO
                </span>
                <span className="text-[10px] tracking-[0.3em] text-rhino-muted uppercase">
                  Fitness Club
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              {siteConfig.tagline}. Strength • Conditioning • Performance.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-rhino-orange transition-colors"
            >
              <Instagram size={18} />
              {siteConfig.instagramHandle}
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-rhino-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-6">CONTACT</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-rhino-orange transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-rhino-orange transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-rhino-orange shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg tracking-wider mb-6">HOURS</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>
                <span className="text-white/60 block text-xs tracking-wider uppercase mb-1">
                  Weekdays
                </span>
                {siteConfig.hours.weekdays}
              </li>
              <li>
                <span className="text-white/60 block text-xs tracking-wider uppercase mb-1">
                  Weekends
                </span>
                {siteConfig.hours.weekends}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 tracking-wider">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-display text-sm tracking-[0.3em] text-white/10">
            EARNED, NOT GIVEN
          </p>
        </div>
      </div>
    </footer>
  );
}
