import { Bot, MessagesSquare, Sparkles, Workflow } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const CAPABILITIES = [
  {
    icon: MessagesSquare,
    title: "LLM-powered chat agents",
    body: "Built a conversational agent (AI Business Analyst) that interviews a user and turns the conversation into a structured output, using both the OpenAI and Google Gemini APIs.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted recommendations",
    body: "Built an AI Matchmaker inside Circle — The AI Universe that filters a large catalog against user intent to return a short, relevant shortlist instead of a static list.",
  },
  {
    icon: Workflow,
    title: "Workflow & integration automation",
    body: "Comfortable wiring third-party services (Firebase, HubSpot, ImageKit, Cloudinary) into application logic to automate what would otherwise be manual steps.",
  },
  {
    icon: Bot,
    title: "Growing into data-driven AI",
    body: "Deepening this through an M.S. in Data Science — treating AI automation as a practice to keep building on, not a finished specialty.",
  },
];

export function AIAutomation() {
  return (
    <section id="ai-automation" className="relative py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrowNumber="04"
          eyebrowLabel="AI & automation"
          line1="A new skill,"
          line2="built on the old ones."
          description="AI automation is a deliberate, growing focus — applied in real projects, built on the same engineering fundamentals as the rest of my work."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={(i % 2) * 0.1} className="bg-bg p-7 md:p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-accent">
                <cap.icon size={18} />
              </span>
              <h3 className="font-display mt-5 text-lg font-medium text-fg">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{cap.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
