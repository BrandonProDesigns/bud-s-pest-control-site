import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#plans", label: "Plans" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-heading text-2xl font-bold uppercase tracking-wide text-primary">
            Bud's Pest Control
          </span>
          <span className="hidden font-heading text-sm font-semibold text-accent sm:inline">
            | BPC
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+27824955147"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-sm transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-secondary hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+27824955147"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground"
            >
              <Phone className="h-4 w-4" /> Call 082 495 5147
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
