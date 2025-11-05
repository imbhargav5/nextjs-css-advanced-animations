import { DemoPageLayout } from "@/components/demo-page-layout";
import { ResponsivePolygonDemo } from "@/components/demos/intermediate/4-responsive-polygon";

export default function Page() {
  return (
    <DemoPageLayout
      title="Responsive Polygon"
      description="Create responsive clip-paths using calc() and viewport units. Adapt shapes to different screen sizes."
      concepts={[
        "Responsive clip-paths",
        "Calc() function",
        "Viewport units",
      ]}
      technicalDetails={`clip-path: polygon(calc(50% - 80px) 0%, calc(50% + 80px) 0%, 100% 100%, 0% 100%);
/* Use calc() for responsive clip-paths */
/* Combine percentages, fixed units, and viewport units`}
      category="intermediate"
      demoNumber={4}
    >
      <ResponsivePolygonDemo />
    </DemoPageLayout>
  );
}

