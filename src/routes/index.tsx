import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { PestsWeTreat } from "@/components/site/PestsWeTreat";
import { SubscriptionPlan } from "@/components/site/SubscriptionPlan";
import { SubscriptionEnquiry } from "@/components/site/SubscriptionEnquiry";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Bud's Pest Control — Cape Town Pest Management | BPC";
const DESCRIPTION =
  "Professional pest control in Cape Town. Treatments for cockroaches, rodents, ants, termites & more. Monthly plans from R269. Call 082 495 5147.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Lato:wght@400;700;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <PestsWeTreat />
        <SubscriptionPlan />
        <SubscriptionEnquiry />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
