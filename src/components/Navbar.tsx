"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.body.classList.toggle("menu-open", isOpen);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  const handleNavClick = () => closeMenu();

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || isOpen
            ? "bg-rhino-black/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent",
          isOpen ? "py-3" : scrolled ? "py-3" : "py-4 md:py-5"
        )}
      >
        <nav className="container-custom flex items-center justify-between">
          <Link
            href="#home"
            onClick={handleNavClick}
            className="flex items-center gap-3 group relative z-10"
          >
            <Logo size="md" ring priority />
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
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden relative z-10 p-2.5 -mr-2.5 text-white hover:text-rhino-orange transition-colors touch-manipulation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
          </button>
        </nav>
      </header>

      {/* Backdrop — sits below header (z-40) so hamburger stays clickable */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-rhino-black/90 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 z-40 h-dvh w-full max-w-sm bg-rhino-dark border-l border-white/5 lg:hidden transition-transform duration-300 ease-out overflow-y-auto",
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col min-h-full pt-24 pb-10 px-8">
          <p className="text-xs tracking-[0.3em] uppercase text-rhino-orange mb-8">
            Menu
          </p>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-display text-3xl sm:text-4xl tracking-wider text-white hover:text-rhino-orange transition-colors duration-200 py-3 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-3">
            <Button href="#membership" size="lg" className="w-full" onClick={handleNavClick}>
              Join Now
            </Button>
            <Button
              href={siteConfig.instagram}
              variant="outline"
              size="lg"
              className="w-full"
              external
              onClick={handleNavClick}
            >
              Follow on Instagram
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
