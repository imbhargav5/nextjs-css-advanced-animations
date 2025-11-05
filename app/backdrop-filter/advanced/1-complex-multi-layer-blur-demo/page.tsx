import { DemoPageLayout } from "@/components/demo-page-layout";
import { ComplexMultiLayerBlurDemo } from "./1-complex-multi-layer-blur";

export default function Page() {
  return (
    <DemoPageLayout
      title="Complex Multi-Layer Blur"
      description="Create complex compositions with multiple layered elements using different backdrop-filter blur values."
      concepts={[
        "Layered backdrop-filter effects",
        "Creating depth with multiple layers",
        "Nested blur compositions",
      ]}
      technicalDetails={`/* Multiple layers with different blur values */
.layer1 { backdrop-filter: blur(5px); }
.layer2 { backdrop-filter: blur(10px); }
.layer3 { backdrop-filter: blur(15px); }
/* Creates depth through layered blur */`}
      category="advanced"
      demoNumber={1}
      section="backdrop-filter"
    >
      <ComplexMultiLayerBlurDemo />
    </DemoPageLayout>
  );
}

