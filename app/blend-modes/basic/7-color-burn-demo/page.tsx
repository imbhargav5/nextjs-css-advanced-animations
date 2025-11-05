import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Color Burn Blend",
  description: "Learn about color burn blend mode, which darkens the base color by inverting, dividing, and inverting again.",
  category: "blend-modes",
  level: "basic",
});

import { ColorBurnBlendDemo } from "./7-color-burn";

export default function Page() {
  return (
    <DemoPageLayout
      title="Color Burn Blend"
      description="Learn about color burn blend mode, which darkens the base color by inverting, dividing, and inverting again."
      concepts={[
        "Basic color-burn blend mode syntax",
        "Understanding how color-burn creates dark, saturated results",
        "Using color-burn with gradients and shapes",
      ]}
      technicalDetails={`mix-blend-mode: color-burn;
/* Darkens the base color by inverting, dividing, and inverting again */
/* Creates very dark, saturated results */`}
      category="basic"
      demoNumber={7}
      section="blend-modes"
    >
      <ColorBurnBlendDemo />
    </DemoPageLayout>
  );
}

