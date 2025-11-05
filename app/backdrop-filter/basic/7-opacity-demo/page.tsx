import { DemoPageLayout } from "@/components/demo-page-layout";
import { OpacityDemo } from "./7-opacity";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Opacity",
  description: "Learn how backdrop-filter opacity adjusts the opacity of the background behind an element.",
  category: "backdrop-filter",
  level: "basic",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Opacity"
      description="Learn how backdrop-filter opacity adjusts the opacity of the background behind an element."
      concepts={[
        "Opacity value range (0 to 1)",
        "Understanding transparency levels",
        "Creating semi-transparent overlays",
      ]}
      technicalDetails={`backdrop-filter: opacity(0.6);
/* Values: 0 (transparent) to 1 (opaque) */
/* Adjusts the opacity of the background */`}
      category="basic"
      demoNumber={7}
      section="backdrop-filter"
    >
      <OpacityDemo />
    </DemoPageLayout>
  );
}

