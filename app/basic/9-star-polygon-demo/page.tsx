import { DemoPageLayout } from "@/components/demo-page-layout";
import { StarPolygonDemo } from "@/components/demos/basic/9-star-polygon";

export default function Page() {
  return (
    <DemoPageLayout
      title="Star Polygon"
      description="Create star shapes using polygon with alternating outer and inner points. Learn the geometry of star shapes."
      concepts={[
        "Star geometry",
        "Alternating points",
        "Complex polygons",
      ]}
      technicalDetails={`clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
/* 5-pointed star requires 10 points */
/* Alternates between outer and inner points`}
      category="basic"
      demoNumber={9}
    >
      <StarPolygonDemo />
    </DemoPageLayout>
  );
}

