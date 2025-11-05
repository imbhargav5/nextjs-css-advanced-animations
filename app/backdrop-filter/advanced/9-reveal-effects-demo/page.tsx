import { DemoPageLayout } from "@/components/demo-page-layout";
import { RevealEffectsDemo } from "./9-reveal-effects";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Reveal Effects",
  description: "Create animated reveal effects using backdrop-filter transitions.",
  category: "backdrop-filter",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Reveal Effects"
      description="Create animated reveal effects using backdrop-filter transitions."
      concepts={[
        "Reveal animation patterns",
        "Combining transforms with backdrop-filter",
        "Creating engaging transitions",
      ]}
      technicalDetails={`backdrop-filter: blur(15px);
transition: transform 0.7s, opacity 0.7s;
.revealed { transform: translateX(100%); }
/* Creating reveal animations */`}
      category="advanced"
      demoNumber={9}
      section="backdrop-filter"
    >
      <RevealEffectsDemo />
    </DemoPageLayout>
  );
}

