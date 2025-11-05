import { DemoPageLayout } from "@/components/demo-page-layout";
import { ImageGalleriesDemo } from "./14-image-galleries";

export default function Page() {
  return (
    <DemoPageLayout
      title="Image Galleries"
      description="Create elegant image gallery overlays using backdrop-filter effects."
      concepts={[
        "Image overlay patterns",
        "Backdrop-filter on images",
        "Creating gallery interfaces",
      ]}
      technicalDetails={`.image-overlay {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
}
/* Backdrop filters on image overlays */`}
      category="intermediate"
      demoNumber={14}
      section="backdrop-filter"
    >
      <ImageGalleriesDemo />
    </DemoPageLayout>
  );
}

