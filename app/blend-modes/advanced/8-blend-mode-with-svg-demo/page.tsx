import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { BlendModeWithSVGDemo } from "./8-blend-mode-with-svg";
export const metadata: Metadata = generateMetadata({
  title: "Blend Mode with SVG",
  description: "Learn how to apply blend modes to SVG elements, creating complex shape-based blending effects.",
  category: "blend-modes",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode with SVG"
      description="Learn how to apply blend modes to SVG elements, creating complex shape-based blending effects."
      concepts={[
        "Applying blend modes to SVG elements",
        "Using SVG shapes with blending",
        "Combining SVG gradients with blend modes",
      ]}
      technicalDetails={`<div style={{ background: 'blue' }}>
  <svg style={{ mixBlendMode: 'multiply' }}>
    <circle cx="50%" cy="50%" r="40%" fill="yellow" />
  </svg>
</div>

/* SVG elements blend with backgrounds */
/* Great for complex shapes and paths */`}
      category="advanced"
      demoNumber={8}
      section="blend-modes"
    >
      <BlendModeWithSVGDemo />
    </DemoPageLayout>
  );
}

