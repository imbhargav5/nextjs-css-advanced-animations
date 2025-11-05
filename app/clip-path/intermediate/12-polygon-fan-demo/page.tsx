import { DemoPageLayout } from "@/components/demo-page-layout";
import { PolygonFanDemo } from "./12-polygon-fan";

export default function Page() {
  return (
    <DemoPageLayout
      title="Polygon Fan Animation"
      description="Create fan-shaped polygons that open and close. Use JavaScript to generate polygon points dynamically."
      concepts={[
        "Dynamic polygon generation",
        "Fan shapes",
        "Point calculation",
      ]}
      technicalDetails={`/* Generate fan points dynamically */
function generateFanPoints(open, segments) {
  const points = ["50% 50%"];
  const radius = open ? 100 : 50;
  // Calculate points around circle
  return \`polygon(\${points.join(", ")})\`;
}`}
      category="intermediate"
      demoNumber={12}
    >
      <PolygonFanDemo />
    </DemoPageLayout>
  );
}

