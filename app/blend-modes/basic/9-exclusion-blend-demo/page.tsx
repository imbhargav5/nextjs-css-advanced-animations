import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Exclusion Blend",
  description: "Learn about exclusion blend mode, which is similar to difference but creates softer inversion effects.",
  category: "blend-modes",
  level: "basic",
});

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

