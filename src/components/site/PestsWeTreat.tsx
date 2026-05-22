import { Bug, Rat } from "lucide-react";
import { FadeIn } from "./FadeIn";

interface Pest {
  label: string;
  icon?: string;
  image?: string;
}

const pests: Pest[] = [
  { label: "Ants", icon: "🐜" },
  { label: "Bed Bugs", icon: "🛏️" },
  { label: "Cockroaches", icon: "🪳" },
  { label: "Crickets", icon: "🦗" },
  { label: "Fish Moths", icon: "🩶" },
  { label: "Fleas", icon: "🦟" },
  { label: "Lice", icon: "🪰" },
  { label: "Millipedes", icon: "🐛" },
  { label: "Rodents", icon: "🐀" },
  { label: "Spiders", icon: "🕷️" },
  { label: "Wasps", icon: "🐝" },
];

export function PestsWeTreat() {
  return (
    <section id="services" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Our Services</p>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase text-primary sm:text-5xl">
            We Treat For
          </h2>
          <p className="mt-4 text-muted-foreground">
            From everyday nuisances to serious infestations — we handle them all.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 mx-auto">
          {pests.map((p, i) => (
            <FadeIn key={p.label} delay={i * 0.05}>
              <div className="group flex h-full cursor-default flex-col items-center justify-center rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-lg">
                <div className="flex h-20 items-center justify-center transition-transform group-hover:scale-110">
                  {p.image ? (
                    <img src={p.image} alt={p.label} className="h-full w-auto object-contain" />
                  ) : (
                    <div className="text-5xl">{p.icon}</div>
                  )}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold uppercase tracking-wide text-primary group-hover:text-accent-foreground">
                  {p.label}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <Bug className="h-5 w-5 text-accent" />
          <span>Don't see your pest? </span>
          <a href="tel:+27824955147" className="font-bold uppercase text-primary hover:text-accent">
            Call us
          </a>
          <Rat className="h-5 w-5 text-accent" />
        </FadeIn>
      </div>
    </section>
  );
}
