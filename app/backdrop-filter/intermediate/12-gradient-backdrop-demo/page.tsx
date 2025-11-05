import { DemoPageLayout } from "@/components/demo-page-layout";
import { GradientBackdropDemo } from "./12-gradient-backdrop";

export default function Page() {
  return (
    <DemoPageLayout
      title="Gradient Backdrop"
      description="Apply backdrop-filter effects to gradient backgrounds for rich visual compositions."
      concepts={[
        "Filters on gradients",
        "Combining gradients with backdrop-filter",
        "Creating depth with layers",
      ]}
      technicalDetails={`background: linear-gradient(...);
backdrop-filter: blur(15px) saturate(1.5);
/* Backdrop filters work on gradient backgrounds */
/* Creates rich visual effects */`}
      category="intermediate"
      demoNumber={12}
      section="backdrop-filter"
    >
      <GradientBackdropDemo />
    </DemoPageLayout>
  );
}

