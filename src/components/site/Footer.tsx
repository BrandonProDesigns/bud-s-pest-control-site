import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="rounded-md bg-white p-3">
            <img src={logo} alt="Bud's Pest Control" className="h-14 w-auto" />
          </div>
          <p className="text-sm text-primary-foreground/70">Quality Service You Can Trust</p>
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
          © {new Date().getFullYear()} Bud's Pest Control. All rights reserved. Cape Town, South
          Africa.
        </p>
      </div>
    </footer>
  );
}
