import { DemoPageLayout } from "@/components/demo-page-layout";
import { HardLightBlendDemo } from "./10-hard-light";

export default function Page() {
  return (
    <DemoPageLayout
      title="Hard Light Blend"
      description="Learn about hard light blend mode, which is similar to overlay but uses the blend color as the reference point."
      concepts={[
        "Basic hard-light blend mode syntax",
        "Understanding how hard-light combines multiply and screen",
        "Using hard-light with gradients and shapes",
      ]}
      technicalDetails={`mix-blend-mode: hard-light;
/* Similar to overlay but uses blend color as the reference */
/* Multiplies if blend color is dark, screens if blend color is light */`}
      category="basic"
      demoNumber={10}
      section="blend-modes"
    >
      <HardLightBlendDemo />
    </DemoPageLayout>
  );
}

