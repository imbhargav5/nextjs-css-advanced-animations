import { DemoPageLayout } from "@/components/demo-page-layout";
import { BlendModeWithGradientsDemo } from "./12-blend-mode-with-gradients";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Blend Mode with Gradients",
  description: "Learn how to combine blend modes with radial, conic, and complex gradients for stunning effects.",
  category: "blend-modes",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode with Gradients"
      description="Learn how to combine blend modes with radial, conic, and complex gradients for stunning effects."
      concepts={[
        "Using radial gradients with blend modes",
        "Combining conic gradients with blending",
        "Creating complex gradient compositions",
      ]}
      technicalDetails={`.gradient-blend {
  mix-blend-mode: multiply;
  background: radial-gradient(
    circle at center,
    yellow,
    transparent
  );
}

/* Radial, conic, and linear gradients */
/* All work beautifully with blend modes */`}
      category="intermediate"
      demoNumber={12}
      section="blend-modes"
    >
      <BlendModeWithGradientsDemo />
    </DemoPageLayout>
  );
}

