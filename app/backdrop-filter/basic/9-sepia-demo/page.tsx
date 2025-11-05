import { DemoPageLayout } from "@/components/demo-page-layout";
import { SepiaDemo } from "./9-sepia";

export default function Page() {
  return (
    <DemoPageLayout
      title="Sepia"
      description="Learn how backdrop-filter sepia applies a vintage sepia tone effect to the background behind an element."
      concepts={[
        "Sepia value range (0 to 1)",
        "Understanding vintage effects",
        "Creating warm-toned overlays",
      ]}
      technicalDetails={`backdrop-filter: sepia(1.0);
/* Values: 0 (no effect) to 1 (fully sepia) */
/* Applies a sepia (vintage) effect to the background */`}
      category="basic"
      demoNumber={9}
      section="backdrop-filter"
    >
      <SepiaDemo />
    </DemoPageLayout>
  );
}

