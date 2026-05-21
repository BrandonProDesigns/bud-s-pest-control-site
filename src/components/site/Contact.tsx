import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FadeIn } from "./FadeIn";

const cards = [
  {
    icon: Phone,
    label: "Call Us",
    value: "082 495 5147",
    href: "tel:+27824955147",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+27 82 495 5147",
    href: "https://wa.me/27824955147",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@budspestcontrol.co.za",
    href: "mailto:info@budspestcontrol.co.za",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cape Town, Western Cape, South Africa",
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Get In Touch</p>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase text-primary sm:text-5xl">
            Contact Bud's Pest Control
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-sm">
            <Clock className="h-4 w-4" />
            Always Open • 24/7
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const inner = (
              <div className="flex h-full flex-col items-start rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <p className="mt-5 font-heading text-sm font-bold uppercase tracking-wide text-accent">
                  {c.label}
                </p>
                <p className="mt-1 font-semibold text-primary">{c.value}</p>
              </div>
            );
            return (
              <FadeIn key={c.label} delay={i * 0.06}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
