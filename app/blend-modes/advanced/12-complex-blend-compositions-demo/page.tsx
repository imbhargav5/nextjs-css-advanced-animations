import { DemoPageLayout } from "@/components/demo-page-layout";
import { ComplexBlendCompositionsDemo } from "./12-complex-blend-compositions";

export default function Page() {
  return (
    <DemoPageLayout
      title="Complex Blend Compositions"
      description="Learn how to create sophisticated multi-layer compositions using various blend modes and isolation groups."
      concepts={[
        "Creating complex multi-layer compositions",
        "Using isolation with multiple blend modes",
        "Combining many blend modes for stunning effects",
      ]}
      technicalDetails={`/* Base layer */
background: blue;

/* Multiple blend layers with different modes */
.layer1 { mix-blend-mode: multiply; }
.layer2 { mix-blend-mode: screen; }
.layer3 { mix-blend-mode: overlay; }
.layer4 { mix-blend-mode: hard-light; }
.layer5 { mix-blend-mode: difference; }
.layer6 { mix-blend-mode: exclusion; }
.layer7 { mix-blend-mode: soft-light; }

/* Use isolation to create blend groups */
/* Complex compositions create stunning effects */`}
      category="advanced"
      demoNumber={12}
      section="blend-modes"
    >
      <ComplexBlendCompositionsDemo />
    </DemoPageLayout>
  );
}

