import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Color Dodge Blend",
  description: "Learn about color dodge blend mode, which brightens the base color by dividing by the inverse of the blend color.",
  category: "blend-modes",
  level: "basic",
});

import { ColorDodgeBlendDemo } from "./6-color-dodge";

export default function Page() {
  return (
    <DemoPageLayout
      title="Color Dodge Blend"
      description="Learn about color dodge blend mode, which brightens the base color by dividing by the inverse of the blend color."
      concepts={[
        "Basic color-dodge blend mode syntax",
        "Understanding how color-dodge creates bright, saturated results",
        "Using color-dodge with gradients and shapes",
      ]}
      technicalDetails={`mix-blend-mode: color-dodge;
/* Brightens the base color by dividing by the inverse of the blend color */
/* Creates very bright, saturated results */`}
      category="basic"
      demoNumber={6}
      section="blend-modes"
    >
      <ColorDodgeBlendDemo />
    </DemoPageLayout>
  );
}

