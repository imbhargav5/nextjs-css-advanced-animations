import { DemoPageLayout } from "@/components/demo-page-layout";
import { GlassMorphismCardDemo } from "./2-glass-morphism-card";

export default function Page() {
  return (
    <DemoPageLayout
      title="Glass Morphism Card"
      description="Create beautiful glassmorphism cards using backdrop-filter blur and transparency effects."
      concepts={[
        "Glassmorphism design principles",
        "Combining blur with transparency",
        "Using borders for depth",
      ]}
      technicalDetails={`backdrop-filter: blur(20px) saturate(180%);
background-color: rgba(255, 255, 255, 0.15);
border: 1px solid rgba(255, 255, 255, 0.3);
/* Classic glassmorphism effect */`}
      category="intermediate"
      demoNumber={2}
      section="backdrop-filter"
    >
      <GlassMorphismCardDemo />
    </DemoPageLayout>
  );
}

