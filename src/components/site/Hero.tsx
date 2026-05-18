import { Phone, MessageCircle } from "lucide-react";

function TechnicianSilhouette() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="h-full w-full"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tank on back */}
      <rect x="60" y="90" width="60" height="120" rx="8" fill="#e87722" />
      <rect x="72" y="78" width="36" height="16" rx="4" fill="#e87722" />
      {/* Body */}
      <path
        d="M120 140 Q160 110 200 120 L240 130 L260 200 L250 320 L210 440 L180 440 L185 320 L160 240 L130 230 Z"
        fill="#ffffff"
        fillOpacity="0.95"
      />
      {/* Head with mask */}
      <circle cx="200" cy="90" r="38" fill="#ffffff" />
      <rect x="172" y="80" width="56" height="26" rx="6" fill="#1a2e5a" />
      <circle cx="186" cy="93" r="5" fill="#ffffff" />
      <circle cx="214" cy="93" r="5" fill="#ffffff" />
      {/* Arm + hose */}
      <path
        d="M240 150 Q300 160 320 220 Q330 260 300 280"
        stroke="#ffffff"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M300 280 Q280 290 270 320 L320 360"
        stroke="#1a2e5a"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Sprayer nozzle */}
      <rect
        x="315"
        y="350"
        width="50"
        height="18"
        rx="4"
        fill="#e87722"
        transform="rotate(20 315 350)"
      />
      {/* Spray */}
      <g opacity="0.7">
        <circle cx="380" cy="380" r="3" fill="#e87722" />
        <circle cx="390" cy="395" r="2" fill="#e87722" />
        <circle cx="375" cy="400" r="2.5" fill="#e87722" />
        <circle cx="395" cy="375" r="2" fill="#e87722" />
        <circle cx="385" cy="410" r="2" fill="#e87722" />
      </g>
      {/* Legs */}
      <rect x="170" y="430" width="22" height="50" fill="#1a2e5a" />
      <rect x="205" y="430" width="22" height="50" fill="#1a2e5a" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Diagonal orange accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-accent/15"
        style={{ clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-accent/25"
        style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 20% 100%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
        <div>
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            Cape Town • Always Open 24/7
          </span>
          <h1 className="mt-5 font-heading text-5xl font-bold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
            Protecting Your Home & Business From Pests
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 sm:text-xl">
            Professional Pest Management Services in Cape Town. Reliable • Safe •
            Professional Service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+27824955147"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 font-bold uppercase tracking-wide text-accent-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5" />
              Call Now: 082 495 5147
            </a>
            <a
              href="https://wa.me/27824955147"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary-foreground/80 bg-transparent px-6 py-4 font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:border-whatsapp hover:bg-whatsapp/10"
            >
              <MessageCircle className="h-5 w-5 text-whatsapp" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[360px] w-full max-w-md md:h-[460px]">
          <TechnicianSilhouette />
        </div>
      </div>
    </section>
  );
}
