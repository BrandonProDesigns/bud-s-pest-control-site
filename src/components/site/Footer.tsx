import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <p className="font-heading text-2xl font-bold uppercase tracking-wide">
            Bud's Pest Control <span className="text-accent">| BPC</span>
          </p>
          <p className="mt-1 text-sm text-primary-foreground/70">
            Quality Service You Can Trust
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary-foreground/20 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary-foreground/20 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Bud's Pest Control. All rights reserved.
          Cape Town, South Africa.
        </p>
      </div>
    </footer>
  );
}
