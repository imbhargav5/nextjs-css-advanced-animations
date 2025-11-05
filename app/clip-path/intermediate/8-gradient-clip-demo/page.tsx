import { DemoPageLayout } from "@/components/demo-page-layout";
import { GradientClipDemo } from "./8-gradient-clip";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Gradient with Clip-Path",
  description: "Combine gradients with clip-path shapes. Create colorful, shaped gradients.",
  category: "clip-path",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Gradient with Clip-Path"
      description="Combine gradients with clip-path shapes. Create colorful, shaped gradients."
      concepts={[
        "Gradients + clip-path",
        "Radial gradients",
        "Linear gradients",
      ]}
      technicalDetails={`clip-path: circle(50% at 50% 50%);
background: radial-gradient(circle, purple 0%, pink 50%, transparent 100%);
/* Clip-path works with any background */
/* Combine gradients with shapes`}
      category="intermediate"
      demoNumber={8}
    >
      <GradientClipDemo />
    </DemoPageLayout>
  );
}

