import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-rhino-orange" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
        }}
      />

      <div className="container-custom relative z-10 text-center">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider text-white leading-none mb-6">
          LOCK INTO
          <br />
          THE TASK
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-10">
          Your transformation starts with a single step through our doors. Join the
          Rhino pack today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#membership" variant="secondary" size="lg">
            View Membership Plans
          </Button>
          <Button
            href="#contact"
            variant="outline"
            size="lg"
            className="border-white/50 text-white hover:bg-white/10"
          >
            Book a Free Tour
          </Button>
        </div>
      </div>
    </section>
  );
}
