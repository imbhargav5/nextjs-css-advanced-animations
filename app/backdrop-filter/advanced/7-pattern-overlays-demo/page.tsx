import { DemoPageLayout } from "@/components/demo-page-layout";
import { PatternOverlaysDemo } from "./7-pattern-overlays";

export default function Page() {
  return (
    <DemoPageLayout
      title="Pattern Overlays"
      description="Combine backdrop-filter with CSS repeating patterns to create textured overlay effects."
      concepts={[
        "CSS repeating patterns",
        "Combining patterns with backdrop-filter",
        "Creating textured overlays",
      ]}
      technicalDetails={`backdrop-filter: blur(15px);
background-image: repeating-linear-gradient(...);
/* Combining backdrop-filter with CSS patterns */`}
      category="advanced"
      demoNumber={7}
      section="backdrop-filter"
    >
      <PatternOverlaysDemo />
    </DemoPageLayout>
  );
}

