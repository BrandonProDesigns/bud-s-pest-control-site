import { Hero } from "@/components/site/Hero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { PestsWeTreat } from "@/components/site/PestsWeTreat";
import { MoreServices } from "@/components/site/MoreServices";
import { SubscriptionPlan } from "@/components/site/SubscriptionPlan";
import { SubscriptionEnquiry } from "@/components/site/SubscriptionEnquiry";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <PestsWeTreat />
        <MoreServices />
        <SubscriptionPlan />
        <SubscriptionEnquiry />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
