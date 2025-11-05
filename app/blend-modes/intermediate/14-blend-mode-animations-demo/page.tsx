import { DemoPageLayout } from "@/components/demo-page-layout";
import { BlendModeAnimationsDemo } from "./14-blend-mode-animations";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Blend Mode Animations",
  description: "Learn how to animate blend modes using keyframe animations and transforms for dynamic effects.",
  category: "blend-modes",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode Animations"
      description="Learn how to animate blend modes using keyframe animations and transforms for dynamic effects."
      concepts={[
        "Animating blend modes with keyframes",
        "Combining transforms with blend modes",
        "Creating continuous blend mode animations",
      ]}
      technicalDetails={`useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => (prev + 0.01) % 1);
  }, 16);
  return () => clearInterval(interval);
}, []);

<div style={{
  mixBlendMode: blendModes[progress],
  transform: \`scale(\${scale})\`
}} />`}
      category="intermediate"
      demoNumber={14}
      section="blend-modes"
    >
      <BlendModeAnimationsDemo />
    </DemoPageLayout>
  );
}

