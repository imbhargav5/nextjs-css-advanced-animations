import { DemoPageLayout } from "@/components/demo-page-layout";
import { PolygonMorphingDemo } from "./2-polygon-morphing";

export default function Page() {
  return (
    <DemoPageLayout
      title="Polygon Morphing"
      description="Morph between different polygon shapes smoothly. Requires matching point counts for smooth transitions."
      concepts={[
        "Shape morphing",
        "Point matching",
        "Smooth transitions",
      ]}
      technicalDetails={`transition: clip-path 0.7s ease-in-out;
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
/* Morph to */
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
/* Points must match for smooth transition`}
      category="intermediate"
      demoNumber={2}
    >
      <PolygonMorphingDemo />
    </DemoPageLayout>
  );
}

