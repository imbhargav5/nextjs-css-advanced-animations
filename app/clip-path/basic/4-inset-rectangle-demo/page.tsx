import { DemoPageLayout } from "@/components/demo-page-layout";
import { InsetRectangleDemo } from "./4-inset-rectangle";

export default function Page() {
  return (
    <DemoPageLayout
      title="Inset Rectangle"
      description="Use inset() to create inner rectangles by clipping from the edges. Perfect for creating frames and borders."
      concepts={[
        "Inset() function syntax",
        "Clipping from edges",
        "Creating frames and borders",
      ]}
      technicalDetails={`clip-path: inset(20%);
/* Shorthand: all sides */
clip-path: inset(10% 0% 10% 0%);
/* Syntax: inset(top right bottom left)`}
      category="basic"
      demoNumber={4}
    >
      <InsetRectangleDemo />
    </DemoPageLayout>
  );
}

