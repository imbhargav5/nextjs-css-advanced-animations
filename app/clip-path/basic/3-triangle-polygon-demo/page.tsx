import { DemoPageLayout } from "@/components/demo-page-layout";
import { TrianglePolygonDemo } from "./3-triangle-polygon";

export default function Page() {
  return (
    <DemoPageLayout
      title="Triangle Polygon"
      description="Create triangular shapes using polygon() function. Learn how to define points and create various triangle orientations."
      concepts={[
        "Polygon() function syntax",
        "Defining coordinate points",
        "Creating different triangle shapes",
      ]}
      technicalDetails={`clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
/* Syntax: polygon(x1 y1, x2 y2, x3 y3, ...) */
/* Each point is defined as x% y%`}
      category="basic"
      demoNumber={3}
    >
      <TrianglePolygonDemo />
    </DemoPageLayout>
  );
}

