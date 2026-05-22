import { FadeIn } from "./FadeIn";
import termiteImg from "@/assets/termite.png";

interface Pest {
  name: string;
  icon?: string;
  image?: string;
}

const pests: Pest[] = [
  { name: "Ant", icon: "🐜" },
  { name: "Bedbug", icon: "🛏️" },
  { name: "Cockroach", icon: "🪳" },
  { name: "Cricket", icon: "🦗" },
  { name: "Fish Moth", icon: "🪲" },
  { name: "Flea", icon: "🦟" },
  { name: "Louse", icon: "🪲" },
  { name: "Millipede", icon: "🐛" },
  { name: "Rodent", icon: "🐀" },
  { name: "Spider", icon: "🕷️" },
  { name: "Termite", image: termiteImg },
  { name: "Wasp", icon: "🐝" },
];

export function MoreServices() {
  return (
    <section id="more-services" className="bg-secondary py-20 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold uppercase text-primary sm:text-5xl">
            WE ALSO TREAT
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our comprehensive pest control solutions cover a wide range of common household pests.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-4 max-w-md mx-auto">
          {pests.map((pest, i) => (
            <FadeIn key={pest.name} delay={i * 0.05}>
              <div className="group flex h-full cursor-default flex-col items-center justify-center rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-lg">
                <div className="flex h-20 items-center justify-center transition-transform group-hover:scale-110">
                  {pest.image ? (
                    <img src={pest.image} alt={pest.name} className="h-full w-auto object-contain" />
                  ) : (
                    <div className="text-5xl">{pest.icon}</div>
                  )}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold uppercase tracking-wide text-primary group-hover:text-accent-foreground">
                  {pest.name}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
