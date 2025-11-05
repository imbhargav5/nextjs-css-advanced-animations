import { DemoPageLayout } from "@/components/demo-page-layout";
import { HoverFilterEffectsDemo } from "./6-hover-filter-effects";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Hover Filter Effects",
  description: "Create interactive hover effects using backdrop-filter transitions.",
  category: "backdrop-filter",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Hover Filter Effects"
      description="Create interactive hover effects using backdrop-filter transitions."
      concepts={[
        "Hover state transitions",
        "Dynamic backdrop-filter changes",
        "Creating interactive UI elements",
      ]}
      technicalDetails={`backdrop-filter: blur(5px);
transition: backdrop-filter 0.3s;
:hover { backdrop-filter: blur(20px); }
/* Smooth hover transitions */`}
      category="intermediate"
      demoNumber={6}
      section="backdrop-filter"
    >
      <HoverFilterEffectsDemo />
    </DemoPageLayout>
  );
}

