import { DemoPageLayout } from "@/components/demo-page-layout";
import { BackdropFilterTransformsDemo } from "./15-backdrop-filter-transforms";

export default function Page() {
  return (
    <DemoPageLayout
      title="Backdrop Filter Transforms"
      description="Combine backdrop-filter with CSS transforms to create dynamic visual effects."
      concepts={[
        "CSS transforms with backdrop-filter",
        "Rotating and scaling blurred elements",
        "Creating dynamic transformations",
      ]}
      technicalDetails={`backdrop-filter: blur(15px);
transform: rotate(45deg) scale(1.2);
transition: transform 0.3s;
/* Combining CSS transforms with backdrop-filter */`}
      category="advanced"
      demoNumber={15}
      section="backdrop-filter"
    >
      <BackdropFilterTransformsDemo />
    </DemoPageLayout>
  );
}

