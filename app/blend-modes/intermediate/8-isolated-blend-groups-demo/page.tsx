import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { IsolatedBlendGroupsDemo } from "./8-isolated-blend-groups";
export const metadata: Metadata = generateMetadata({
  title: "Isolated Blend Groups",
  description: "Learn about the isolation property, which creates new stacking contexts and controls blend mode scope.",
  category: "blend-modes",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Isolated Blend Groups"
      description="Learn about the isolation property, which creates new stacking contexts and controls blend mode scope."
      concepts={[
        "Understanding the isolation property",
        "Creating isolated blend groups",
        "Controlling blend mode scope with isolation",
      ]}
      technicalDetails={`.container {
  isolation: isolate;
}

.blend-layer {
  mix-blend-mode: multiply;
}

/* Isolation creates new stacking context */
/* Blend modes only affect elements within isolated group */`}
      category="intermediate"
      demoNumber={8}
      section="blend-modes"
    >
      <IsolatedBlendGroupsDemo />
    </DemoPageLayout>
  );
}

