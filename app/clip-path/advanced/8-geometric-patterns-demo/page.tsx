import { DemoPageLayout } from "@/components/demo-page-layout";
import { GeometricPatternsDemo } from "./8-geometric-patterns";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Geometric Patterns",
  description: "Create complex geometric patterns by layering and repeating clipped shapes.",
  category: "clip-path",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Geometric Patterns"
      description="Create complex geometric patterns by layering and repeating clipped shapes."
      concepts={[
        "Pattern creation",
        "Shape repetition",
        "Geometric composition",
      ]}
      technicalDetails={`/* Repeat shapes with transforms */
for (let i = 0; i < count; i++) {
  element.style.clipPath = "polygon(...)";
  element.style.transform = \`rotate(\${i * angle}deg) scale(\${scale})\`;
}`}
      category="advanced"
      demoNumber={8}
    >
      <GeometricPatternsDemo />
    </DemoPageLayout>
  );
}

