import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { BlendModeWithClippingDemo } from "./5-blend-mode-with-clipping";
export const metadata: Metadata = generateMetadata({
  title: "Blend Mode with Clipping",
  description: "Learn how to combine blend modes with clip-path to create interesting shape-based blending effects.",
  category: "blend-modes",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode with Clipping"
      description="Learn how to combine blend modes with clip-path to create interesting shape-based blending effects."
      concepts={[
        "Combining blend modes with clip-path",
        "Creating shape-based blend effects",
        "Understanding clip-path application order",
      ]}
      technicalDetails={`.blend-clip {
  mix-blend-mode: multiply;
  clip-path: circle(40%);
}

/* Clip-path applied before blending */
/* Creates interesting shape effects */`}
      category="advanced"
      demoNumber={5}
      section="blend-modes"
    >
      <BlendModeWithClippingDemo />
    </DemoPageLayout>
  );
}

