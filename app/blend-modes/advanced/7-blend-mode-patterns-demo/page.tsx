import { DemoPageLayout } from "@/components/demo-page-layout";
import { BlendModePatternsDemo } from "./7-blend-mode-patterns";

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode Patterns"
      description="Learn how to combine blend modes with repeating patterns to create texture and visual interest."
      concepts={[
        "Using repeating patterns with blend modes",
        "Creating texture with patterns",
        "Combining multiple pattern layers",
      ]}
      technicalDetails={`.pattern-blend {
  mix-blend-mode: multiply;
  background-image: repeating-linear-gradient(
    45deg,
    yellow,
    yellow 10px,
    red 10px,
    red 20px
  );
}

/* Patterns blend beautifully with backgrounds */
/* Creates texture and visual interest */`}
      category="advanced"
      demoNumber={7}
      section="blend-modes"
    >
      <BlendModePatternsDemo />
    </DemoPageLayout>
  );
}

