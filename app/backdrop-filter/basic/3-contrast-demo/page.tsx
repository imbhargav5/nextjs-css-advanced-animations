import { DemoPageLayout } from "@/components/demo-page-layout";
import { ContrastDemo } from "./3-contrast";

export default function Page() {
  return (
    <DemoPageLayout
      title="Contrast"
      description="Learn how backdrop-filter contrast adjusts the contrast of the background behind an element."
      concepts={[
        "Contrast value range (0 to infinity)",
        "Understanding contrast multipliers",
        "Creating muted or vibrant overlays",
      ]}
      technicalDetails={`backdrop-filter: contrast(1.5);
/* Values: 0-1 (reduced), 1 (normal), >1 (increased) */
/* Adjusts the contrast of the background behind the element */`}
      category="basic"
      demoNumber={3}
      section="backdrop-filter"
    >
      <ContrastDemo />
    </DemoPageLayout>
  );
}

