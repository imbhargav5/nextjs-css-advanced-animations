import { DemoPageLayout } from "@/components/demo-page-layout";
import { SimpleCircleClipDemo } from "./1-simple-circle-clip";

export default function Page() {
  return (
    <DemoPageLayout
      title="Simple Circle Clip"
      description="Learn the basics of clipping elements with circular shapes. This demo shows how to use circle() function with different sizes and positions."
      concepts={[
        "Basic circle() function syntax",
        "Positioning circles with 'at' keyword",
        "Using percentages for responsive sizing",
      ]}
      technicalDetails={`clip-path: circle(50% at 50% 50%);
/* Syntax: circle(radius at x y) */
/* radius: percentage or length */
/* x, y: center position`}
      category="basic"
      demoNumber={1}
    >
      <SimpleCircleClipDemo />
    </DemoPageLayout>
  );
}

