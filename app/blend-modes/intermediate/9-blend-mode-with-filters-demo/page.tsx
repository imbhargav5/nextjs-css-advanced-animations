import { DemoPageLayout } from "@/components/demo-page-layout";
import { BlendModeWithFiltersDemo } from "./9-blend-mode-with-filters";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Blend Mode with Filters",
  description: "Learn how to combine blend modes with CSS filters to create unique visual effects.",
  category: "blend-modes",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode with Filters"
      description="Learn how to combine blend modes with CSS filters to create unique visual effects."
      concepts={[
        "Combining blend modes with CSS filters",
        "Understanding filter application order",
        "Creating complex visual effects",
      ]}
      technicalDetails={`.blend-layer {
  mix-blend-mode: multiply;
  filter: blur(8px) brightness(1.2);
}

/* Filters applied before blending */
/* Creates unique visual effects */`}
      category="intermediate"
      demoNumber={9}
      section="blend-modes"
    >
      <BlendModeWithFiltersDemo />
    </DemoPageLayout>
  );
}

