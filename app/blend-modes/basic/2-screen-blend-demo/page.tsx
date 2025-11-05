import { DemoPageLayout } from "@/components/demo-page-layout";
import { ScreenBlendDemo } from "./2-screen-blend";

export default function Page() {
  return (
    <DemoPageLayout
      title="Screen Blend"
      description="Learn about screen blend mode, which lightens the base color by inverting, multiplying, and inverting again."
      concepts={[
        "Basic screen blend mode syntax",
        "Understanding how screen lightens colors",
        "Using screen with gradients and shapes",
      ]}
      technicalDetails={`mix-blend-mode: screen;
/* Lightens the base color by inverting, multiplying, and inverting again */
/* Result is always lighter than original */`}
      category="basic"
      demoNumber={2}
      section="blend-modes"
    >
      <ScreenBlendDemo />
    </DemoPageLayout>
  );
}

