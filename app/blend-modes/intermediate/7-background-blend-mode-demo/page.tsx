import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { BackgroundBlendModeDemo } from "./7-background-blend-mode";
export const metadata: Metadata = generateMetadata({
  title: "Background Blend Mode",
  description: "Learn about background-blend-mode, which blends multiple background layers together.",
  category: "blend-modes",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Background Blend Mode"
      description="Learn about background-blend-mode, which blends multiple background layers together."
      concepts={[
        "Understanding background-blend-mode property",
        "Blending multiple background images/gradients",
        "Difference between background-blend-mode and mix-blend-mode",
      ]}
      technicalDetails={`background-image: 
  linear-gradient(...),
  linear-gradient(...);
background-blend-mode: multiply;

/* Blends multiple background layers */
/* Different from mix-blend-mode */`}
      category="intermediate"
      demoNumber={7}
      section="blend-modes"
    >
      <BackgroundBlendModeDemo />
    </DemoPageLayout>
  );
}

