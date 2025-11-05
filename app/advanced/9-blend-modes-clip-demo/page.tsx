import { DemoPageLayout } from "@/components/demo-page-layout";
import { BlendModesClipDemo } from "@/components/demos/advanced/9-blend-modes-clip";

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Modes with Clip-Path"
      description="Combine clip-path with CSS blend modes for interesting color interactions and effects."
      concepts={[
        "Mix-blend-mode",
        "Color interactions",
        "Visual effects",
      ]}
      technicalDetails={`clip-path: circle(50% at 50% 50%);
mix-blend-mode: multiply;
/* Clip-path works with CSS blend modes */
/* Creates interesting color interactions`}
      category="advanced"
      demoNumber={9}
    >
      <BlendModesClipDemo />
    </DemoPageLayout>
  );
}

