import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Overlay Blend",
  description: "Learn about overlay blend mode, which combines multiply and screen modes based on the base color.",
  category: "blend-modes",
  level: "basic",
});

import { OverlayBlendDemo } from "./3-overlay-blend";

export default function Page() {
  return (
    <DemoPageLayout
      title="Overlay Blend"
      description="Learn about overlay blend mode, which combines multiply and screen modes based on the base color."
      concepts={[
        "Basic overlay blend mode syntax",
        "Understanding how overlay combines multiply and screen",
        "Using overlay with gradients and shapes",
      ]}
      technicalDetails={`mix-blend-mode: overlay;
/* Combines multiply and screen modes */
/* Darkens if base color is dark, lightens if base color is light */`}
      category="basic"
      demoNumber={3}
      section="blend-modes"
    >
      <OverlayBlendDemo />
    </DemoPageLayout>
  );
}

