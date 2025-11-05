import { DemoPageLayout } from "@/components/demo-page-layout";
import { FilterCombinationsDemo } from "./14-filter-combinations";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Filter Combinations",
  description: "Combine clip-path with CSS filters for enhanced visual effects.",
  category: "clip-path",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Filter Combinations"
      description="Combine clip-path with CSS filters for enhanced visual effects."
      concepts={[
        "CSS filters",
        "Filter combinations",
        "Visual enhancement",
      ]}
      technicalDetails={`clip-path: circle(50% at 50% 50%);
filter: blur(4px) brightness(1.2) contrast(1.3);
/* Clip-path applies first, then filters */
/* Filters affect the clipped element`}
      category="advanced"
      demoNumber={14}
    >
      <FilterCombinationsDemo />
    </DemoPageLayout>
  );
}

