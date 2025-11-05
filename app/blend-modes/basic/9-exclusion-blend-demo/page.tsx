import { DemoPageLayout } from "@/components/demo-page-layout";
import { ExclusionBlendDemo } from "./9-exclusion-blend";

export default function Page() {
  return (
    <DemoPageLayout
      title="Exclusion Blend"
      description="Learn about exclusion blend mode, which is similar to difference but creates softer inversion effects."
      concepts={[
        "Basic exclusion blend mode syntax",
        "Understanding how exclusion creates softer inversion effects",
        "Using exclusion with gradients and shapes",
      ]}
      technicalDetails={`mix-blend-mode: exclusion;
/* Similar to difference but with lower contrast */
/* Creates softer inversion effects */`}
      category="basic"
      demoNumber={9}
      section="blend-modes"
    >
      <ExclusionBlendDemo />
    </DemoPageLayout>
  );
}

