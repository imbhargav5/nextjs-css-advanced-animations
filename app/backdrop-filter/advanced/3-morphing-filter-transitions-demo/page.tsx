import { DemoPageLayout } from "@/components/demo-page-layout";
import { MorphingFilterTransitionsDemo } from "./3-morphing-filter-transitions";

export default function Page() {
  return (
    <DemoPageLayout
      title="Morphing Filter Transitions"
      description="Create smooth morphing transitions between different backdrop-filter states."
      concepts={[
        "State-based filter transitions",
        "Smooth morphing animations",
        "Complex filter state management",
      ]}
      technicalDetails={`const states = [
  { blur: 5, brightness: 1.0 },
  { blur: 15, brightness: 0.8 },
];
backdrop-filter: blur(\${state.blur}px) brightness(\${state.brightness});
transition: backdrop-filter 1s;
/* Smooth morphing between states */`}
      category="advanced"
      demoNumber={3}
      section="backdrop-filter"
    >
      <MorphingFilterTransitionsDemo />
    </DemoPageLayout>
  );
}

