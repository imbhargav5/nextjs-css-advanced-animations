import { DemoPageLayout } from "@/components/demo-page-layout";
import { DynamicFilterSwitchingDemo } from "./11-dynamic-filter-switching";

export default function Page() {
  return (
    <DemoPageLayout
      title="Dynamic Filter Switching"
      description="Create interfaces that dynamically switch between different backdrop-filter effects."
      concepts={[
        "JavaScript filter switching",
        "Dynamic CSS property updates",
        "Creating interactive controls",
      ]}
      technicalDetails={`const filters = {
  blur: "blur(15px)",
  brightness: "brightness(0.8)",
  // ... more filters
};
backdrop-filter: \${filters[selectedFilter]};
/* Dynamically switch between filters */`}
      category="intermediate"
      demoNumber={11}
      section="backdrop-filter"
    >
      <DynamicFilterSwitchingDemo />
    </DemoPageLayout>
  );
}

