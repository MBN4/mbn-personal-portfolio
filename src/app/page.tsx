import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import About from "@/components/About";
import Work from "@/components/Work";
import ExpertiseJourney from "@/components/ExpertiseJourney";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionToggle from "@/components/MotionToggle";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <About />
        <Work />
        <ExpertiseJourney />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <MotionToggle />
    </>
  );
}
