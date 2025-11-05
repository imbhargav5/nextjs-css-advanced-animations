import { DemoPageLayout } from "@/components/demo-page-layout";
import { Blend3DEffectsDemo } from "./4-3d-blend-effects";

export default function Page() {
  return (
    <DemoPageLayout
      title="3D Blend Effects"
      description="Learn how to combine blend modes with 3D transforms to create depth and dimension."
      concepts={[
        "Combining blend modes with 3D transforms",
        "Using perspective with blend modes",
        "Creating 3D depth effects with blending",
      ]}
      technicalDetails={`.container {
  perspective: 1000px;
}

.blend-layer {
  mix-blend-mode: multiply;
  transform: rotateY(45deg) translateZ(20px);
  transform-style: preserve-3d;
}

/* 3D transforms work with blend modes */
/* Creates depth and dimension */`}
      category="advanced"
      demoNumber={4}
      section="blend-modes"
    >
      <Blend3DEffectsDemo />
    </DemoPageLayout>
  );
}

