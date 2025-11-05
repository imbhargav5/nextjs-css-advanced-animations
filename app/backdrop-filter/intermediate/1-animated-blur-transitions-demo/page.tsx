import { DemoPageLayout } from "@/components/demo-page-layout";
import { AnimatedBlurTransitionsDemo } from "./1-animated-blur-transitions";

export default function Page() {
  return (
    <DemoPageLayout
      title="Animated Blur Transitions"
      description="Learn how to create smooth animated transitions with backdrop-filter blur effects."
      concepts={[
        "Transitioning backdrop-filter values",
        "Using CSS transitions with backdrop-filter",
        "Creating interactive blur effects",
      ]}
      technicalDetails={`backdrop-filter: blur(5px);
transition: backdrop-filter 0.5s;
:hover { backdrop-filter: blur(20px); }
/* Smooth transitions between blur states */`}
      category="intermediate"
      demoNumber={1}
      section="backdrop-filter"
    >
      <AnimatedBlurTransitionsDemo />
    </DemoPageLayout>
  );
}

