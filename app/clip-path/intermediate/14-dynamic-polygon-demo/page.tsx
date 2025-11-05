import { DemoPageLayout } from "@/components/demo-page-layout";
import { DynamicPolygonDemo } from "./14-dynamic-polygon";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Dynamic Polygon Generation",
  description: "Generate polygons dynamically with JavaScript. Change the number of sides and watch the shape update.",
  category: "clip-path",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Dynamic Polygon Generation"
      description="Generate polygons dynamically with JavaScript. Change the number of sides and watch the shape update."
      concepts={[
        "Dynamic generation",
        "JavaScript calculations",
        "User input",
      ]}
      technicalDetails={`function generatePolygon(numSides) {
  const points = [];
  for (let i = 0; i < numSides; i++) {
    const angle = (i * 360 / numSides - 90) * (Math.PI / 180);
    const x = 50 + 40 * Math.cos(angle);
    const y = 50 + 40 * Math.sin(angle);
    points.push(\`\${x}% \${y}%\`);
  }
  return \`polygon(\${points.join(", ")})\`;
}`}
      category="intermediate"
      demoNumber={14}
    >
      <DynamicPolygonDemo />
    </DemoPageLayout>
  );
}

