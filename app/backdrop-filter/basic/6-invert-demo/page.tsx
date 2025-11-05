import { DemoPageLayout } from "@/components/demo-page-layout";
import { InvertDemo } from "./6-invert";

export default function Page() {
  return (
    <DemoPageLayout
      title="Invert"
      description="Learn how backdrop-filter invert inverts the colors of the background behind an element."
      concepts={[
        "Invert value range (0 to 1)",
        "Understanding color inversion",
        "Creating high-contrast overlays",
      ]}
      technicalDetails={`backdrop-filter: invert(1.0);
/* Values: 0 (no effect) to 1 (fully inverted) */
/* Inverts the colors of the background */`}
      category="basic"
      demoNumber={6}
      section="backdrop-filter"
    >
      <InvertDemo />
    </DemoPageLayout>
  );
}

