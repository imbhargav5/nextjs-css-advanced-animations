import { DemoPageLayout } from "@/components/demo-page-layout";
import { TextClippingDemo } from "./9-text-clipping";

export default function Page() {
  return (
    <DemoPageLayout
      title="Text Clipping"
      description="Clip text content with shapes. Create text that follows custom shapes."
      concepts={[
        "Text clipping",
        "Shape-based text",
        "Visual effects",
      ]}
      technicalDetails={`div {
  clip-path: circle(40% at 50% 50%);
  background: gradient(...);
}
/* Text is clipped along with the background */
/* Use large text for best effect`}
      category="intermediate"
      demoNumber={9}
    >
      <TextClippingDemo />
    </DemoPageLayout>
  );
}

