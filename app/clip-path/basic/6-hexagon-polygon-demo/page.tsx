import { DemoPageLayout } from "@/components/demo-page-layout";
import { HexagonPolygonDemo } from "./6-hexagon-polygon";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Hexagon Polygon",
  description: "Create hexagonal shapes using polygon with six points. Learn how to calculate and position hexagon vertices.",
  category: "clip-path",
  level: "basic",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Hexagon Polygon"
      description="Create hexagonal shapes using polygon with six points. Learn how to calculate and position hexagon vertices."
      concepts={[
        "Multi-point polygons",
        "Hexagon geometry",
        "Point calculation",
      ]}
      technicalDetails={`clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
/* 6 points create a hexagon */
/* Order matters - connect points sequentially`}
      category="basic"
      demoNumber={6}
    >
      <HexagonPolygonDemo />
    </DemoPageLayout>
  );
}

