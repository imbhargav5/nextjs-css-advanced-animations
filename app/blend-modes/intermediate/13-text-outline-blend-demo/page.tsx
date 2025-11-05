import { DemoPageLayout } from "@/components/demo-page-layout";
import { TextOutlineBlendDemo } from "./13-text-outline-blend";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Text Outline Blend",
  description: "Learn how to create text outline effects using blend modes with transparent text and stroke.",
  category: "blend-modes",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Text Outline Blend"
      description="Learn how to create text outline effects using blend modes with transparent text and stroke."
      concepts={[
        "Using text-stroke with blend modes",
        "Creating outline text effects",
        "Blending transparent text with backgrounds",
      ]}
      technicalDetails={`h2 {
  color: transparent;
  -webkit-text-stroke: 2px yellow;
  mix-blend-mode: multiply;
}

/* Text outline blends with background */
/* Creates unique outline effects */`}
      category="intermediate"
      demoNumber={13}
      section="blend-modes"
    >
      <TextOutlineBlendDemo />
    </DemoPageLayout>
  );
}

