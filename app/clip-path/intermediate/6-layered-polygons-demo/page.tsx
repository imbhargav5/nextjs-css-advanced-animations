import { DemoPageLayout } from "@/components/demo-page-layout";
import { LayeredPolygonsDemo } from "./6-layered-polygons";

export default function Page() {
  return (
    <DemoPageLayout
      title="Layered Polygons"
      description="Layer multiple elements with different clip-paths. Use opacity to create depth and complexity."
      concepts={[
        "Multiple layers",
        "Opacity control",
        "Layered compositions",
      ]}
      technicalDetails={`/* Layer multiple elements with different clip-paths */
.layer1 {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  opacity: 0.7;
}
.layer2 {
  clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
  opacity: 0.7;
}`}
      category="intermediate"
      demoNumber={6}
    >
      <LayeredPolygonsDemo />
    </DemoPageLayout>
  );
}

