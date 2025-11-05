import { DemoPageLayout } from "@/components/demo-page-layout";
import { TextBlendModesDemo } from "./2-text-blend-modes";

export default function Page() {
  return (
    <DemoPageLayout
      title="Text Blend Modes"
      description="Learn how to apply blend modes to text, creating interesting color interactions with backgrounds."
      concepts={[
        "Applying blend modes to text elements",
        "Creating text effects with blend modes",
        "Understanding text blending with backgrounds",
      ]}
      technicalDetails={`h2 {
  mix-blend-mode: multiply;
  color: yellow;
}

/* Text blends with background */
/* Creates interesting color interactions */`}
      category="intermediate"
      demoNumber={2}
      section="blend-modes"
    >
      <TextBlendModesDemo />
    </DemoPageLayout>
  );
}

