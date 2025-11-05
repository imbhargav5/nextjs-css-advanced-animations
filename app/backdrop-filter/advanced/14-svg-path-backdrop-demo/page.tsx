import { DemoPageLayout } from "@/components/demo-page-layout";
import { SVGPathBackdropDemo } from "./14-svg-path-backdrop";

export default function Page() {
  return (
    <DemoPageLayout
      title="SVG Path Backdrop"
      description="Combine backdrop-filter with SVG paths and clip-path for animated and shaped blur effects."
      concepts={[
        "SVG paths with backdrop-filter",
        "Animated clip-path",
        "Complex shape masks",
      ]}
      technicalDetails={`backdrop-filter: blur(15px);
clip-path: polygon(...);
mask-image: url("data:image/svg+xml,...");
/* Combining SVG paths with backdrop-filter */`}
      category="advanced"
      demoNumber={14}
      section="backdrop-filter"
    >
      <SVGPathBackdropDemo />
    </DemoPageLayout>
  );
}

