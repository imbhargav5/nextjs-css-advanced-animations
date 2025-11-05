import { DemoPageLayout } from "@/components/demo-page-layout";
import { BlendModeTransitionsDemo } from "./4-blend-mode-transitions";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Blend Mode Transitions",
  description: "Learn how to animate blend mode changes using CSS transitions for smooth visual effects.",
  category: "blend-modes",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode Transitions"
      description="Learn how to animate blend mode changes using CSS transitions for smooth visual effects."
      concepts={[
        "Transitioning between blend modes",
        "Using CSS transitions with blend modes",
        "Creating animated blend effects",
      ]}
      technicalDetails={`.layer {
  mix-blend-mode: multiply;
  transition: mix-blend-mode 0.5s ease;
}

.layer:hover {
  mix-blend-mode: screen;
}`}
      category="intermediate"
      demoNumber={4}
      section="blend-modes"
    >
      <BlendModeTransitionsDemo />
    </DemoPageLayout>
  );
}

