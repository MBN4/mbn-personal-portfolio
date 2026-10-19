import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { HowIWork } from "@/components/HowIWork";
import { AIAutomation } from "@/components/AIAutomation";
import { JourneySection } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <HowIWork />
        <AIAutomation />
        <JourneySection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
