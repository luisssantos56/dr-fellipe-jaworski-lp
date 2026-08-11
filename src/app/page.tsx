import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsStrip } from "@/components/stats-strip";
import { Method } from "@/components/method";
import { Mounjaro } from "@/components/mounjaro";
import { HowItWorks } from "@/components/how-it-works";
import { AboutDoctor } from "@/components/about-doctor";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <Method />
        <Mounjaro />
        <HowItWorks />
        <AboutDoctor />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
