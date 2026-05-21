import { CalendarClock, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { FadeIn } from "./FadeIn";

const items = [
  {
    icon: ShieldCheck,
    title: "Residential & Commercial",
    desc: "Full-service treatments for homes, offices, restaurants, and warehouses.",
  },
  {
    icon: Sparkles,
    title: "Safe & Approved Methods",
    desc: "Industry-approved pest control products that are safe around family and pets.",
  },
  {
    icon: CalendarClock,
    title: "Ongoing Management Plans",
    desc: "Scheduled treatments designed to eliminate infestations for the long term.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Service",
    desc: "Prompt response, professional technicians, and consistent quality every visit.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Why Choose Us</p>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase text-primary sm:text-5xl">
            Quality Service You Can Trust
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.08}>
              <div className="group h-full rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase text-primary">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
