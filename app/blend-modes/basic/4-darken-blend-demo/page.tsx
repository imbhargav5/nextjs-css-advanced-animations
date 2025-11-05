import { DemoPageLayout } from "@/components/demo-page-layout";
import { DarkenBlendDemo } from "./4-darken-blend";

export default function Page() {
  return (
    <DemoPageLayout
      title="Darken Blend"
      description="Learn about darken blend mode, which selects the darker of the base and blend colors."
      concepts={[
        "Basic darken blend mode syntax",
        "Understanding how darken selects minimum RGB values",
        "Using darken with gradients and shapes",
      ]}
      technicalDetails={`mix-blend-mode: darken;
/* Selects the darker of the base and blend colors */
/* Takes the minimum value for each RGB channel */`}
      category="basic"
      demoNumber={4}
      section="blend-modes"
    >
      <DarkenBlendDemo />
    </DemoPageLayout>
  );
}

