import { DemoPageLayout } from "@/components/demo-page-layout";
import { InsetAnimationDemo } from "@/components/demos/intermediate/11-inset-animation";

export default function Page() {
  return (
    <DemoPageLayout
      title="Inset Animation"
      description="Animate inset values to create expanding and contracting frame effects."
      concepts={[
        "Inset animation",
        "Frame effects",
        "Dynamic insets",
      ]}
      technicalDetails={`transition: clip-path 0.7s ease-in-out;
clip-path: inset(5%);
/* Animate to */
clip-path: inset(30%);
/* Smooth transitions between inset values`}
      category="intermediate"
      demoNumber={11}
    >
      <InsetAnimationDemo />
    </DemoPageLayout>
  );
}

