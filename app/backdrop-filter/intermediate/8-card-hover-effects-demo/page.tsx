import { DemoPageLayout } from "@/components/demo-page-layout";
import { CardHoverEffectsDemo } from "./8-card-hover-effects";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Card Hover Effects",
  description: "Create interactive card hover effects using backdrop-filter transitions.",
  category: "backdrop-filter",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Card Hover Effects"
      description="Create interactive card hover effects using backdrop-filter transitions."
      concepts={[
        "Card hover states",
        "Multi-filter transitions",
        "Creating engaging interactions",
      ]}
      technicalDetails={`.card {
  backdrop-filter: blur(10px) brightness(0.9);
  transition: backdrop-filter 0.3s;
}
.card:hover {
  backdrop-filter: blur(20px) brightness(1.2);
}`}
      category="intermediate"
      demoNumber={8}
      section="backdrop-filter"
    >
      <CardHoverEffectsDemo />
    </DemoPageLayout>
  );
}

