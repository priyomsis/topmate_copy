import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/ui/nav/Navbar";
import Pricing from "@/components/LandingPage/Pricing";
import Faq from "@/components/LandingPage/Faq";
import PlatformExperts from "@/components/LandingPage/PlatformExperts";
import CreateYourTpmtPage from "@/components/LandingPage/CreateYourTpmtPage";
import TpmtAttributes from "@/components/LandingPage/TpmtAttributes";
import EarnConvert from "@/components/LandingPage/EarnConvert";
import AboutTheTeam from "@/components/LandingPage/AboutTheTeam";
import Reviews from "@/components/LandingPage/Reviews";
import Footer from "@/components/LandingPage/Footer";
import SmoothScroll from "@/components/LandingPage/SmoothScroll";
import NewOnTpmt from "@/components/LandingPage/NewOnTpmt";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-white">
        <Navbar />
        
        <section id="hero">
          <Hero />
        </section>

        <section id="experts">
          <PlatformExperts />
        </section>

        <section id="create">
          <CreateYourTpmtPage />
        </section>

        <section id="attributes">
          <TpmtAttributes />
        </section>

        <section id="new-on-tpmt">
          <NewOnTpmt />
        </section>

        <section id="earn">
          <EarnConvert />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="team">
          <AboutTheTeam />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <section id="faq">
          <Faq />
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
