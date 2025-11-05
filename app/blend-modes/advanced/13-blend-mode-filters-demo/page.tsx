import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { BlendModeFiltersDemo } from "./13-blend-mode-filters";
export const metadata: Metadata = generateMetadata({
  title: "Blend Mode Filters",
  description: "Learn how to combine blend modes with multiple CSS filters for complex visual effects.",
  category: "blend-modes",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode Filters"
      description="Learn how to combine blend modes with multiple CSS filters for complex visual effects."
      concepts={[
        "Combining blend modes with CSS filters",
        "Using multiple filters together",
        "Understanding filter application order",
      ]}
      technicalDetails={`.blend-filter {
  mix-blend-mode: multiply;
  filter: blur(10px) brightness(1.2) contrast(1.3);
}

/* Filters applied before blending */
/* Creates unique visual effects */
/* Multiple filters can be combined */`}
      category="advanced"
      demoNumber={13}
      section="blend-modes"
    >
      <BlendModeFiltersDemo />
    </DemoPageLayout>
  );
}

