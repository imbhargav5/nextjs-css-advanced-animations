import { DemoPageLayout } from "@/components/demo-page-layout";
import { LightenBlendDemo } from "./5-lighten-blend";

export default function Page() {
  return (
    <DemoPageLayout
      title="Lighten Blend"
      description="Learn about lighten blend mode, which selects the lighter of the base and blend colors."
      concepts={[
        "Basic lighten blend mode syntax",
        "Understanding how lighten selects maximum RGB values",
        "Using lighten with gradients and shapes",
      ]}
      technicalDetails={`mix-blend-mode: lighten;
/* Selects the lighter of the base and blend colors */
/* Takes the maximum value for each RGB channel */`}
      category="basic"
      demoNumber={5}
      section="blend-modes"
    >
      <LightenBlendDemo />
    </DemoPageLayout>
  );
}

