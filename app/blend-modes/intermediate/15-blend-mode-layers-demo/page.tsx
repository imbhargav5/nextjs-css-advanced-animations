import { DemoPageLayout } from "@/components/demo-page-layout";
import { BlendModeLayersDemo } from "./15-blend-mode-layers";

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode Layers"
      description="Learn how to stack multiple layers with different blend modes to create complex visual compositions."
      concepts={[
        "Stacking multiple blend mode layers",
        "Understanding layer blending order",
        "Creating complex multi-layer compositions",
      ]}
      technicalDetails={`/* Base layer */
background: blue;

/* Layer 1 */
.layer1 {
  mix-blend-mode: multiply;
}

/* Layer 2 */
.layer2 {
  mix-blend-mode: screen;
}

/* Layer 3 */
.layer3 {
  mix-blend-mode: overlay;
}

/* Layers stack and blend sequentially */`}
      category="intermediate"
      demoNumber={15}
      section="blend-modes"
    >
      <BlendModeLayersDemo />
    </DemoPageLayout>
  );
}

