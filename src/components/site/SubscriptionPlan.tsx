import { CheckCircle2, Repeat } from "lucide-react";
import { FadeIn } from "./FadeIn";

const steps = [
  "A monthly debit of R269 is set up on your account.",
  "You receive 6 professional services per year — one every 2 months.",
  "Our technicians treat your property on a recurring schedule.",
  "Pests stay under control long-term. Ts & Cs Apply.",
];

export function SubscriptionPlan() {
  return (
    <section
      id="plans"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-full w-2/3 bg-accent/10"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <div className="flex flex-col items-center gap-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
              <Repeat className="h-3.5 w-3.5" /> Monthly Subscription
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="rounded bg-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                📍 Cape Town
              </span>
              <span className="rounded bg-primary-foreground/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground/60">
                🕐 JHB Coming Soon
              </span>
            </div>
          </div>
          <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
            Join Our Monthly Subscription — <span className="text-accent">From R269/month</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            A single treatment won't eliminate a long-standing infestation. Our monthly subscription
            sets up a debit of R269/month, giving you 6 professional services per year (every 2
            months) to keep pests under control for good.
          </p>
        </FadeIn>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-lg border border-accent/30 bg-background/5 p-8 backdrop-blur-sm">
              <h3 className="font-heading text-2xl font-bold uppercase text-accent">
                How It Works
              </h3>
              <ul className="mt-6 space-y-4">
                {steps.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-primary-foreground/90">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-lg bg-accent p-8 text-accent-foreground shadow-2xl">
              <div>
                <p className="font-heading text-sm font-bold uppercase tracking-widest">
                  Starting From
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-heading text-6xl font-bold leading-none sm:text-7xl">
                    R269
                  </span>
                  <span className="font-heading text-2xl font-bold uppercase">/month</span>
                </div>
                <p className="mt-4 text-accent-foreground/90">
                  6 services per year • Cape Town & surrounds • Cancel any time per Ts & Cs.
                </p>
                <div className="mt-4 flex flex-col gap-1 text-xs font-bold uppercase tracking-tight text-primary/80">
                  <p>📍 Currently available in Cape Town & surrounds only</p>
                  <p>🕐 Johannesburg — Coming Soon!</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://wa.me/27824955147?text=Hi%20Bud%27s%20Pest%20Control%2C%20I%27d%20like%20to%20subscribe%20to%20the%20R269%2Fmonth%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-4 font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Subscribe Now — R269/month
                </a>
                <a
                  href="tel:+27824955147"
                  className="inline-flex items-center justify-center rounded-md border-2 border-primary/30 bg-transparent px-6 py-3 font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary/10"
                >
                  Or Call 082 495 5147
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
