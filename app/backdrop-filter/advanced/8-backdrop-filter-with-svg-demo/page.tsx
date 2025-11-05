import { DemoPageLayout } from "@/components/demo-page-layout";
import { BackdropFilterWithSVGDemo } from "./8-backdrop-filter-with-svg";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Backdrop Filter with SVG",
  description: "Combine backdrop-filter with SVG backgrounds and masks for complex visual effects.",
  category: "backdrop-filter",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Backdrop Filter with SVG"
      description="Combine backdrop-filter with SVG backgrounds and masks for complex visual effects."
      concepts={[
        "SVG backgrounds",
        "SVG masks with backdrop-filter",
        "Creating complex SVG compositions",
      ]}
      technicalDetails={`background-image: url("data:image/svg+xml,...");
backdrop-filter: blur(15px);
/* Using SVG backgrounds with backdrop-filter */`}
      category="advanced"
      demoNumber={8}
      section="backdrop-filter"
    >
      <BackdropFilterWithSVGDemo />
    </DemoPageLayout>
  );
}

