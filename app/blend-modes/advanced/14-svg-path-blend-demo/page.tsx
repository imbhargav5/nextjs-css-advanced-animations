import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { SVGPathBlendDemo } from "./14-svg-path-blend";
export const metadata: Metadata = generateMetadata({
  title: "SVG Path Blend",
  description: "Learn how to apply blend modes to complex SVG paths, creating intricate shape-based blending effects.",
  category: "blend-modes",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="SVG Path Blend"
      description="Learn how to apply blend modes to complex SVG paths, creating intricate shape-based blending effects."
      concepts={[
        "Applying blend modes to SVG paths",
        "Using complex SVG paths with blending",
        "Creating intricate path-based compositions",
      ]}
      technicalDetails={`<div style={{ background: 'blue' }}>
  <svg style={{ mixBlendMode: 'multiply' }}>
    <path d="M 50,50 Q 100,20 150,50" 
          stroke="yellow" 
          strokeWidth="20" 
          fill="none" />
  </svg>
</div>

/* SVG paths blend beautifully */
/* Great for complex shapes and curves */`}
      category="advanced"
      demoNumber={14}
      section="blend-modes"
    >
      <SVGPathBlendDemo />
    </DemoPageLayout>
  );
}

