import { DemoPageLayout } from "@/components/demo-page-layout";
import { MultipleFiltersDemo } from "./10-multiple-filters";

export default function Page() {
  return (
    <DemoPageLayout
      title="Multiple Filters"
      description="Learn how to combine multiple backdrop-filter functions to create complex effects."
      concepts={[
        "Combining multiple filter functions",
        "Filter application order",
        "Creating rich visual effects",
      ]}
      technicalDetails={`backdrop-filter: blur(10px) brightness(0.8);
/* Multiple filters can be combined */
/* Filters are applied in order from left to right */
/* Separate each filter with a space */`}
      category="basic"
      demoNumber={10}
      section="backdrop-filter"
    >
      <MultipleFiltersDemo />
    </DemoPageLayout>
  );
}

