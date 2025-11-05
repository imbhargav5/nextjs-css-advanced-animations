import { DemoPageLayout } from "@/components/demo-page-layout";
import { MultipleCirclesDemo } from "./5-multiple-circles";

export default function Page() {
  return (
    <DemoPageLayout
      title="Multiple Circles"
      description="Combine multiple clip-path shapes using comma separation. Create complex patterns by overlapping shapes."
      concepts={[
        "Multiple clip-path values",
        "Comma separation",
        "Shape unions",
      ]}
      technicalDetails={`clip-path: circle(30% at 30% 50%), circle(30% at 70% 50%);
/* Multiple clip-paths create a union */
/* Separate each shape with a comma`}
      category="basic"
      demoNumber={5}
    >
      <MultipleCirclesDemo />
    </DemoPageLayout>
  );
}

