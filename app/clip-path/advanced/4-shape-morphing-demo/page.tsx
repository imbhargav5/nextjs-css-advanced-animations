import { DemoPageLayout } from "@/components/demo-page-layout";
import { ShapeMorphingDemo } from "./4-shape-morphing";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Shape Morphing",
  description: "Morph between multiple complex shapes in sequence. Combine with transforms for advanced effects.",
  category: "clip-path",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Shape Morphing"
      description="Morph between multiple complex shapes in sequence. Combine with transforms for advanced effects."
      concepts={[
        "Multi-shape morphing",
        "Sequence transitions",
        "Transform combinations",
      ]}
      technicalDetails={`const shapes = [
  "polygon(50% 0%, 0% 100%, 100% 100%)",
  "polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)",
  // ... more shapes
];
element.style.clipPath = shapes[currentIndex];`}
      category="advanced"
      demoNumber={4}
    >
      <ShapeMorphingDemo />
    </DemoPageLayout>
  );
}

