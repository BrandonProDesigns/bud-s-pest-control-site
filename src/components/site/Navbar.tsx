import { useState } from "react";
import { Mail, MessageCircle, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";

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
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Bud's Pest Control logo" className="h-10 w-auto sm:h-12" />
          <span className="sr-only">Bud's Pest Control | BPC</span>
        </a>

        <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
          <a
            href="tel:+27824955147"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground shadow-sm"
            aria-label="Call Now"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/27824955147"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#25D366] text-white shadow-sm"
            aria-label="WhatsApp Us"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href="mailto:info@budspestcontrol.co.za"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm"
            aria-label="Email Us"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <nav className="hidden items-center gap-4 lg:gap-8 md:flex">
          <div className="flex items-center gap-4 lg:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:+27824955147"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-xs font-bold uppercase tracking-wide text-accent-foreground shadow-sm transition-transform hover:scale-[1.03] lg:px-4 lg:text-sm"
            >
              <Phone className="h-4 w-4" /> <span className="hidden xl:inline">Call Now</span><span className="xl:hidden">Call</span>
            </a>
            <a
              href="https://wa.me/27824955147"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-3 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition-transform hover:scale-[1.03] lg:px-4 lg:text-sm"
            >
              <MessageCircle className="h-4 w-4" /> <span className="hidden xl:inline">WhatsApp Us</span><span className="xl:hidden">WhatsApp</span>
            </a>
            <a
              href="mailto:info@budspestcontrol.co.za"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] lg:px-4 lg:text-sm"
            >
              <Mail className="h-4 w-4" /> <span className="hidden xl:inline">Email Us</span><span className="xl:hidden">Email</span>
            </a>
          </div>
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
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <a
                href="tel:+27824955147"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="https://wa.me/27824955147"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="mailto:info@budspestcontrol.co.za"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
