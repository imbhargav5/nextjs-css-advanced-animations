import { DemoPageLayout } from "@/components/demo-page-layout";
import { Perspective3dDemo } from "./6-perspective-3d";

export default function Page() {
  return (
    <DemoPageLayout
      title="3D Perspective Effects"
      description="Combine clip-path with 3D transforms and perspective. Create depth and dimension."
      concepts={[
        "3D transforms",
        "Perspective",
        "Transform-style preserve-3d",
      ]}
      technicalDetails={`element {
  clip-path: polygon(...);
  transform: rotateX(45deg) rotateY(30deg);
  transform-style: preserve-3d;
}
parent { perspective: 1000px; }`}
      category="advanced"
      demoNumber={6}
    >
      <Perspective3dDemo />
    </DemoPageLayout>
  );
}

