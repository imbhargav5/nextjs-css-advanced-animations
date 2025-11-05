import { DemoPageLayout } from "@/components/demo-page-layout";
import { MultiLayerClipsDemo } from "./5-multi-layer-clips";

export default function Page() {
  return (
    <DemoPageLayout
      title="Multiple Clip-Path Layers"
      description="Compose multiple clipped layers to create complex visual compositions."
      concepts={[
        "Layer composition",
        "Multiple clip-paths",
        "Visual complexity",
      ]}
      technicalDetails={`/* Stack multiple clipped elements */
.layer1 { clip-path: polygon(...); }
.layer2 { clip-path: circle(...); }
.layer3 { clip-path: polygon(...); }
/* Each layer has its own clip-path`}
      category="advanced"
      demoNumber={5}
    >
      <MultiLayerClipsDemo />
    </DemoPageLayout>
  );
}

