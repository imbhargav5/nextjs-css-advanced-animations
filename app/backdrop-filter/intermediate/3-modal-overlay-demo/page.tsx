import { DemoPageLayout } from "@/components/demo-page-layout";
import { ModalOverlayDemo } from "./3-modal-overlay";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Modal Overlay",
  description: "Create modal dialogs with blurred backdrop overlays using backdrop-filter.",
  category: "backdrop-filter",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Modal Overlay"
      description="Create modal dialogs with blurred backdrop overlays using backdrop-filter."
      concepts={[
        "Modal backdrop patterns",
        "Combining blur with opacity",
        "Creating focus states",
      ]}
      technicalDetails={`/* Backdrop overlay */
backdrop-filter: blur(10px);
background-color: rgba(0, 0, 0, 0.3);
/* Creates a blurred modal backdrop */`}
      category="intermediate"
      demoNumber={3}
      section="backdrop-filter"
    >
      <ModalOverlayDemo />
    </DemoPageLayout>
  );
}

