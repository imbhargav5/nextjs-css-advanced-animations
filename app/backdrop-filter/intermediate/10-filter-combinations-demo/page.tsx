import { DemoPageLayout } from "@/components/demo-page-layout";
import { FilterCombinationsDemo } from "./10-filter-combinations";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Filter Combinations",
  description: "Explore combining multiple backdrop-filter functions for rich visual effects.",
  category: "backdrop-filter",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Filter Combinations"
      description="Explore combining multiple backdrop-filter functions for rich visual effects."
      concepts={[
        "Combining multiple filters",
        "Filter application order",
        "Creating complex effects",
      ]}
      technicalDetails={`backdrop-filter: blur(12px) brightness(0.9) contrast(1.2);
/* Multiple filters work together */
/* Each filter is applied sequentially */
/* Order matters for the final result */`}
      category="intermediate"
      demoNumber={10}
      section="backdrop-filter"
    >
      <FilterCombinationsDemo />
    </DemoPageLayout>
  );
}

