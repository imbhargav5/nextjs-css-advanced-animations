import { DemoPageLayout } from "@/components/demo-page-layout";
import { ComplexMultiLayerBlendDemo } from "./1-complex-multi-layer-blend";

export default function Page() {
  return (
    <DemoPageLayout
      title="Complex Multi-Layer Blend"
      description="Learn how to create complex compositions with multiple layers using different blend modes."
      concepts={[
        "Stacking many blend mode layers",
        "Using isolation with multiple layers",
        "Creating sophisticated visual compositions",
      ]}
      technicalDetails={`/* Base layer */
background: blue;

/* Multiple blend layers */
.layer1 { mix-blend-mode: multiply; }
.layer2 { mix-blend-mode: screen; }
.layer3 { mix-blend-mode: overlay; }
.layer4 { mix-blend-mode: hard-light; }
.layer5 { mix-blend-mode: difference; }

/* Each layer blends with all previous layers */`}
      category="advanced"
      demoNumber={1}
      section="blend-modes"
    >
      <ComplexMultiLayerBlendDemo />
    </DemoPageLayout>
  );
}

