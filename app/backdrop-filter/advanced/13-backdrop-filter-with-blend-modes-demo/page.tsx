import { DemoPageLayout } from "@/components/demo-page-layout";
import { BackdropFilterWithBlendModesDemo } from "./13-backdrop-filter-with-blend-modes";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Backdrop Filter with Blend Modes",
  description: "Combine backdrop-filter with CSS mix-blend-mode for unique visual effects.",
  category: "backdrop-filter",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Backdrop Filter with Blend Modes"
      description="Combine backdrop-filter with CSS mix-blend-mode for unique visual effects."
      concepts={[
        "Combining backdrop-filter with mix-blend-mode",
        "Creating unique blend effects",
        "Layering multiple techniques",
      ]}
      technicalDetails={`backdrop-filter: blur(15px);
mix-blend-mode: multiply;
/* Combining backdrop-filter with blend modes */
/* Creates unique visual effects */`}
      category="advanced"
      demoNumber={13}
      section="backdrop-filter"
    >
      <BackdropFilterWithBlendModesDemo />
    </DemoPageLayout>
  );
}

