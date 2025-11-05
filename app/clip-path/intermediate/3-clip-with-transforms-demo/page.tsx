import { DemoPageLayout } from "@/components/demo-page-layout";
import { ClipWithTransformsDemo } from "./3-clip-with-transforms";

export default function Page() {
  return (
    <DemoPageLayout
      title="Clip-Path with Transforms"
      description="Combine clip-path with CSS transforms. Transform affects the clipped element, creating interesting 3D effects."
      concepts={[
        "Transform + clip-path",
        "Rotation and scaling",
        "3D effects",
      ]}
      technicalDetails={`clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
transform: rotate(45deg) scale(1.2);
/* Clip-path applies first, then transform */`}
      category="intermediate"
      demoNumber={3}
    >
      <ClipWithTransformsDemo />
    </DemoPageLayout>
  );
}

