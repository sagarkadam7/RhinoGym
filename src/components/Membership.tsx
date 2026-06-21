import { Check } from "lucide-react";
import { membershipPlans } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Membership() {
  return (
    <section id="membership" className="section-padding bg-rhino-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rhino-orange/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rhino-orange text-sm tracking-[0.3em] uppercase mb-4 block">
            Membership
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider leading-none mb-6">
            INVEST IN
            <br />
            <span className="gradient-text">YOURSELF</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Choose the plan that fits your commitment level. Every membership includes
            full access to our facility and group classes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {membershipPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col border p-8 md:p-10 card-hover",
                plan.highlighted
                  ? "bg-rhino-orange/10 border-rhino-orange md:scale-[1.03] z-10"
                  : "bg-rhino-gray border-white/5"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rhino-orange text-white text-[10px] tracking-[0.2em] uppercase px-4 py-1">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-2xl tracking-wider mb-2">
                {plan.name.toUpperCase()}
              </h3>
              <p className="text-sm text-white/50 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="font-display text-5xl text-white">₹{plan.price}</span>
                <span className="text-sm text-white/40 ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                    <Check className="w-4 h-4 text-rhino-orange shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-10 tracking-wider">
          * Prices are indicative. Contact us for current offers and corporate plans.
        </p>
      </div>
    </section>
  );
}
