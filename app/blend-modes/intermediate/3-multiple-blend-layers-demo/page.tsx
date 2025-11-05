import { DemoPageLayout } from "@/components/demo-page-layout";
import { MultipleBlendLayersDemo } from "./3-multiple-blend-layers";

export default function Page() {
  return (
    <DemoPageLayout
      title="Multiple Blend Layers"
      description="Learn how to stack multiple layers with different blend modes to create complex visual effects."
      concepts={[
        "Stacking multiple blend mode layers",
        "Combining different blend modes",
        "Creating complex compositions with layers",
      ]}
      technicalDetails={`/* Base layer */
background: blue;

/* First blend layer */
.layer1 {
  mix-blend-mode: multiply;
}

/* Second blend layer */
.layer2 {
  mix-blend-mode: screen;
}`}
      category="intermediate"
      demoNumber={3}
      section="blend-modes"
    >
      <MultipleBlendLayersDemo />
    </DemoPageLayout>
  );
}

