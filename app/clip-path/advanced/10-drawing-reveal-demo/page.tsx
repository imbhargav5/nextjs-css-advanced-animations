import { DemoPageLayout } from "@/components/demo-page-layout";
import { DrawingRevealDemo } from "./10-drawing-reveal";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Drawing Reveal Effect",
  description: "Progressively reveal shapes as if they're being drawn. Create animated drawing effects.",
  category: "clip-path",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Drawing Reveal Effect"
      description="Progressively reveal shapes as if they're being drawn. Create animated drawing effects."
      concepts={[
        "Progressive reveals",
        "Drawing simulation",
        "Path following",
      ]}
      technicalDetails={`const generateDrawingPath = (progress) => {
  const points = [];
  for (let i = 0; i <= totalPoints * progress; i++) {
    const angle = (i / points) * Math.PI * 2;
    // Calculate point position
    points.push(\`\${x}% \${y}%\`);
  }
  return \`polygon(50% 50%, \${points.join(", ")})\`;
};`}
      category="advanced"
      demoNumber={10}
    >
      <DrawingRevealDemo />
    </DemoPageLayout>
  );
}

