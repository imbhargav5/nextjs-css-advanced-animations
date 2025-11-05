import { DemoPageLayout } from "@/components/demo-page-layout";
import { AnimatedCircleExpansionDemo } from "./1-animated-circle-expansion";

export default function Page() {
  return (
    <DemoPageLayout
      title="Animated Circle Expansion"
      description="Animate circle clip-path using state and transitions. Create expanding and contracting effects."
      concepts={[
        "State-based animations",
        "Transition timing",
        "Dynamic clip-path values",
      ]}
      technicalDetails={`transition: clip-path 0.5s ease-out;
clip-path: circle(30% at 50% 50%);
/* Expanded state */
clip-path: circle(150% at 50% 50%);`}
      category="intermediate"
      demoNumber={1}
    >
      <AnimatedCircleExpansionDemo />
    </DemoPageLayout>
  );
}

