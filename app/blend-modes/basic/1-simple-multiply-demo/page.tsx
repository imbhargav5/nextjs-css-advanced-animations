import { DemoPageLayout } from "@/components/demo-page-layout";
import { SimpleMultiplyBlendDemo } from "./1-simple-multiply";

export default function Page() {
  return (
    <DemoPageLayout
      title="Simple Multiply Blend"
      description="Learn the basics of multiply blend mode, which darkens the base color by multiplying with the blend color."
      concepts={[
        "Basic multiply blend mode syntax",
        "Understanding how multiply darkens colors",
        "Using multiply with gradients and shapes",
      ]}
      technicalDetails={`mix-blend-mode: multiply;
/* Darkens the base color by multiplying with blend color */
/* Result is always darker than original */`}
      category="basic"
      demoNumber={1}
      section="blend-modes"
    >
      <SimpleMultiplyBlendDemo />
    </DemoPageLayout>
  );
}

