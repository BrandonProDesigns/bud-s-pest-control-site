import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const benefits = [
  "Regular bi-monthly professional treatments.",
  "Priority scheduling for all subscribers.",
  "Comprehensive protection against common pests.",
];

export function SubscriptionEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi Bud's Pest Control! My name is ${formData.name}, I'm from ${formData.suburb}. My number is ${formData.phone}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/27824955147?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="enquiry" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-full w-2/3 bg-accent/10"
        style={{ clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Get Started</p>
            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
              GET IN TOUCH — <span className="text-accent">SUBSCRIBE TODAY</span>
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Ready to protect your home year-round? Fill out the form, and we'll get you set up with our professional pest control subscription.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="font-medium text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-lg bg-accent p-8 text-accent-foreground shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-heading font-bold uppercase tracking-wide">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 border-primary/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-heading font-bold uppercase tracking-wide">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 082 495 5147"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 border-primary/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="suburb" className="font-heading font-bold uppercase tracking-wide">
                      Suburb / Area
                    </Label>
                    <Input
                      id="suburb"
                      name="suburb"
                      placeholder="e.g. Sea Point"
                      required
                      value={formData.suburb}
                      onChange={handleChange}
                      className="h-12 border-primary/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-heading font-bold uppercase tracking-wide">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any specific pest concerns?"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[100px] border-primary/20 bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-2 w-full bg-primary px-6 py-7 text-lg font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.02] hover:bg-primary/90"
                >
                  Subscribe Now
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
