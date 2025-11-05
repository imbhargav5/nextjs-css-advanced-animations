import { DemoPageLayout } from "@/components/demo-page-layout";
import { TextOverlayEffectsDemo } from "./13-text-overlay-effects";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Text Overlay Effects",
  description: "Create readable text overlays using backdrop-filter to ensure text legibility over complex backgrounds.",
  category: "backdrop-filter",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Text Overlay Effects"
      description="Create readable text overlays using backdrop-filter to ensure text legibility over complex backgrounds."
      concepts={[
        "Text readability techniques",
        "Backdrop-filter for text overlays",
        "Creating contrast with filters",
      ]}
      technicalDetails={`.text-overlay {
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.2);
}
/* Creates readable text over complex backgrounds */`}
      category="intermediate"
      demoNumber={13}
      section="backdrop-filter"
    >
      <TextOverlayEffectsDemo />
    </DemoPageLayout>
  );
}

