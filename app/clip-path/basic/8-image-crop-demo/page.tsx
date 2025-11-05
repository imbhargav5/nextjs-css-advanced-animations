import { DemoPageLayout } from "@/components/demo-page-layout";
import { ImageCropDemo } from "./8-image-crop";

export default function Page() {
  return (
    <DemoPageLayout
      title="Image Crop"
      description="Use clip-path to crop images into various shapes without image editing software. Non-destructive image cropping."
      concepts={[
        "Clipping images",
        "Non-destructive cropping",
        "Various shape crops",
      ]}
      technicalDetails={`img {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
/* Creates diamond shape without image editing */
/* Non-destructive cropping`}
      category="basic"
      demoNumber={8}
    >
      <ImageCropDemo />
    </DemoPageLayout>
  );
}

