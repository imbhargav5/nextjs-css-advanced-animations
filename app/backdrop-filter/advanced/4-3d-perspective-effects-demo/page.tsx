import { DemoPageLayout } from "@/components/demo-page-layout";
import { Perspective3DEffectsDemo } from "./4-3d-perspective-effects";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "3D Perspective Effects",
  description: "Combine backdrop-filter with CSS 3D transforms to create perspective effects.",
  category: "backdrop-filter",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="3D Perspective Effects"
      description="Combine backdrop-filter with CSS 3D transforms to create perspective effects."
      concepts={[
        "3D CSS transforms",
        "Combining transforms with backdrop-filter",
        "Creating depth with perspective",
      ]}
      technicalDetails={`transform: rotateY(12deg) rotateX(3deg);
backdrop-filter: blur(15px) brightness(0.9);
/* Combining 3D transforms with backdrop-filter */`}
      category="advanced"
      demoNumber={4}
      section="backdrop-filter"
    >
      <Perspective3DEffectsDemo />
    </DemoPageLayout>
  );
}

