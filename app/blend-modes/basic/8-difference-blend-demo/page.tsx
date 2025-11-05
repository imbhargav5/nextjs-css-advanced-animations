import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Difference Blend",
  description: "Learn about difference blend mode, which subtracts the darker color from the lighter color, creating inversion effects.",
  category: "blend-modes",
  level: "basic",
});

import { DifferenceBlendDemo } from "./8-difference-blend";

export default function Page() {
  return (
    <DemoPageLayout
      title="Difference Blend"
      description="Learn about difference blend mode, which subtracts the darker color from the lighter color, creating inversion effects."
      concepts={[
        "Basic difference blend mode syntax",
        "Understanding how difference creates inversion effects",
        "Using difference with gradients and shapes",
      ]}
      technicalDetails={`mix-blend-mode: difference;
/* Subtracts the darker color from the lighter color */
/* Creates inversion effects - black becomes white */`}
      category="basic"
      demoNumber={8}
      section="blend-modes"
    >
      <DifferenceBlendDemo />
    </DemoPageLayout>
  );
}

