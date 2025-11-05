import { DemoPageLayout } from "@/components/demo-page-layout";
import { BackdropFilterWithClipPathDemo } from "./5-backdrop-filter-with-clip-path";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Backdrop Filter with Clip-Path",
  description: "Combine backdrop-filter with clip-path to create shaped blur effects.",
  category: "backdrop-filter",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Backdrop Filter with Clip-Path"
      description="Combine backdrop-filter with clip-path to create shaped blur effects."
      concepts={[
        "Combining backdrop-filter with clip-path",
        "Creating shaped blur effects",
        "Complex clipping patterns",
      ]}
      technicalDetails={`backdrop-filter: blur(15px);
clip-path: circle(40% at 50% 50%);
/* Combining backdrop-filter with clip-path */
/* Creates shaped blur effects */`}
      category="advanced"
      demoNumber={5}
      section="backdrop-filter"
    >
      <BackdropFilterWithClipPathDemo />
    </DemoPageLayout>
  );
}

