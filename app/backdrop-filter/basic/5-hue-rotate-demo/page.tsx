import { DemoPageLayout } from "@/components/demo-page-layout";
import { HueRotateDemo } from "./5-hue-rotate";

export default function Page() {
  return (
    <DemoPageLayout
      title="Hue Rotate"
      description="Learn how backdrop-filter hue-rotate shifts the hue of colors in the background behind an element."
      concepts={[
        "Hue rotation in degrees (0deg to 360deg)",
        "Understanding color wheel rotation",
        "Creating color-shifted overlays",
      ]}
      technicalDetails={`backdrop-filter: hue-rotate(90deg);
/* Values: 0deg to 360deg */
/* Rotates the hue of colors in the background */`}
      category="basic"
      demoNumber={5}
      section="backdrop-filter"
    >
      <HueRotateDemo />
    </DemoPageLayout>
  );
}

