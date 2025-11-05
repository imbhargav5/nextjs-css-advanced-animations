import { DemoPageLayout } from "@/components/demo-page-layout";
import { MultipleBlendLayersDemo } from "./3-multiple-blend-layers";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Multiple Blend Layers",
  description: "Learn how to stack multiple layers with different blend modes to create complex visual effects.",
  category: "blend-modes",
  level: "intermediate",
});

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

