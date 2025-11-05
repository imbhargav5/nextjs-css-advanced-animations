import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ImageOverlayBlendDemo } from "./1-image-overlay-blend";
export const metadata: Metadata = generateMetadata({
  title: "Image Overlay Blend",
  description: "Learn how to apply blend modes to images, creating overlays and color effects.",
  category: "blend-modes",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Image Overlay Blend"
      description="Learn how to apply blend modes to images, creating overlays and color effects."
      concepts={[
        "Applying blend modes to images",
        "Creating overlay effects with gradients",
        "Combining images with blend modes",
      ]}
      technicalDetails={`/* Base image layer */
background: url('image.jpg');

/* Overlay layer with blend mode */
mix-blend-mode: overlay;
background: linear-gradient(...);`}
      category="intermediate"
      demoNumber={1}
      section="blend-modes"
    >
      <ImageOverlayBlendDemo />
    </DemoPageLayout>
  );
}

