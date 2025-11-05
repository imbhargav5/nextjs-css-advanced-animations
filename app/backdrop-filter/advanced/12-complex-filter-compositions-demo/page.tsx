import { DemoPageLayout } from "@/components/demo-page-layout";
import { ComplexFilterCompositionsDemo } from "./12-complex-filter-compositions";

export default function Page() {
  return (
    <DemoPageLayout
      title="Complex Filter Compositions"
      description="Create complex compositions with multiple coordinated backdrop-filter elements."
      concepts={[
        "Coordinated filter effects",
        "Multi-zone compositions",
        "Creating visual harmony",
      ]}
      technicalDetails={`.zone1 { backdrop-filter: blur(10px) brightness(0.9); }
.zone2 { backdrop-filter: blur(15px) saturate(1.3); }
.zone3 { backdrop-filter: blur(20px) brightness(1.1) contrast(1.2); }
/* Coordinated filter compositions */`}
      category="advanced"
      demoNumber={12}
      section="backdrop-filter"
    >
      <ComplexFilterCompositionsDemo />
    </DemoPageLayout>
  );
}

