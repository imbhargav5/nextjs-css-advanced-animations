import { DemoPageLayout } from "@/components/demo-page-layout";
import { GradientBlendModesDemo } from "./5-gradient-blend-modes";

export default function Page() {
  return (
    <DemoPageLayout
      title="Gradient Blend Modes"
      description="Learn how to blend gradients together using different blend modes to create complex color effects."
      concepts={[
        "Blending gradients with mix-blend-mode",
        "Creating complex gradient compositions",
        "Using radial and linear gradients with blend modes",
      ]}
      technicalDetails={`/* Base gradient */
background: linear-gradient(to bottom right, blue, purple);

/* Blend gradient */
.blend-layer {
  mix-blend-mode: multiply;
  background: linear-gradient(to top right, yellow, red);
}`}
      category="intermediate"
      demoNumber={5}
      section="blend-modes"
    >
      <GradientBlendModesDemo />
    </DemoPageLayout>
  );
}

