import { DemoPageLayout } from "@/components/demo-page-layout";
import { HoverRevealAdvancedDemo } from "./5-hover-reveal-advanced";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Advanced Hover Reveal",
  description: "Multi-stage hover reveals with complex animations. Create sophisticated reveal effects.",
  category: "clip-path",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Advanced Hover Reveal"
      description="Multi-stage hover reveals with complex animations. Create sophisticated reveal effects."
      concepts={[
        "Multi-stage reveals",
        "Complex animations",
        "Various reveal patterns",
      ]}
      technicalDetails={`/* Advanced reveal with multiple stages */
.element {
  clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);
  transition: clip-path 0.7s ease-out;
}
.element:hover {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}`}
      category="intermediate"
      demoNumber={5}
    >
      <HoverRevealAdvancedDemo />
    </DemoPageLayout>
  );
}

