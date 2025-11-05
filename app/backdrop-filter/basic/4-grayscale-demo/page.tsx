import { DemoPageLayout } from "@/components/demo-page-layout";
import { GrayscaleDemo } from "./4-grayscale";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Grayscale",
  description: "Learn how backdrop-filter grayscale converts the background behind an element to grayscale.",
  category: "backdrop-filter",
  level: "basic",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Grayscale"
      description="Learn how backdrop-filter grayscale converts the background behind an element to grayscale."
      concepts={[
        "Grayscale value range (0 to 1)",
        "Understanding desaturation levels",
        "Creating monochrome overlays",
      ]}
      technicalDetails={`backdrop-filter: grayscale(1.0);
/* Values: 0 (no effect) to 1 (fully grayscale) */
/* Converts the background to grayscale */`}
      category="basic"
      demoNumber={4}
      section="backdrop-filter"
    >
      <GrayscaleDemo />
    </DemoPageLayout>
  );
}

