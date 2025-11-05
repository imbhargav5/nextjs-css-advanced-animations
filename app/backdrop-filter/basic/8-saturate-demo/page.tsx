import { DemoPageLayout } from "@/components/demo-page-layout";
import { SaturateDemo } from "./8-saturate";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Saturate",
  description: "Learn how backdrop-filter saturate adjusts the color saturation of the background behind an element.",
  category: "backdrop-filter",
  level: "basic",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Saturate"
      description="Learn how backdrop-filter saturate adjusts the color saturation of the background behind an element."
      concepts={[
        "Saturation value range (0 to infinity)",
        "Understanding color intensity",
        "Creating muted or vibrant overlays",
      ]}
      technicalDetails={`backdrop-filter: saturate(1.5);
/* Values: 0 (grayscale) to infinity (vibrant) */
/* Adjusts the color saturation of the background */`}
      category="basic"
      demoNumber={8}
      section="backdrop-filter"
    >
      <SaturateDemo />
    </DemoPageLayout>
  );
}

