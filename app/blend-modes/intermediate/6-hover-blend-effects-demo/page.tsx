import { DemoPageLayout } from "@/components/demo-page-layout";
import { HoverBlendEffectsDemo } from "./6-hover-blend-effects";

export default function Page() {
  return (
    <DemoPageLayout
      title="Hover Blend Effects"
      description="Learn how to create interactive hover effects using blend modes combined with opacity transitions."
      concepts={[
        "Combining blend modes with hover states",
        "Using opacity transitions with blend modes",
        "Creating interactive visual effects",
      ]}
      technicalDetails={`.container {
  background: blue;
}

.blend-layer {
  mix-blend-mode: multiply;
  opacity: 0;
  transition: opacity 0.3s;
}

.container:hover .blend-layer {
  opacity: 1;
}`}
      category="intermediate"
      demoNumber={6}
      section="blend-modes"
    >
      <HoverBlendEffectsDemo />
    </DemoPageLayout>
  );
}

