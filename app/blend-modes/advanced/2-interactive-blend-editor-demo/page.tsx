import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { InteractiveBlendEditorDemo } from "./2-interactive-blend-editor";
export const metadata: Metadata = generateMetadata({
  title: "Interactive Blend Editor",
  description: "Learn how to create an interactive editor for experimenting with blend modes, colors, and opacity.",
  category: "blend-modes",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Interactive Blend Editor"
      description="Learn how to create an interactive editor for experimenting with blend modes, colors, and opacity."
      concepts={[
        "Creating interactive blend mode controls",
        "Live preview of blend effects",
        "Generating code from user input",
      ]}
      technicalDetails={`const [baseColor, setBaseColor] = useState('#3b82f6');
const [blendColor, setBlendColor] = useState('#fbbf24');
const [blendMode, setBlendMode] = useState('multiply');

<div style={{ backgroundColor: baseColor }}>
  <div style={{ backgroundColor: blendColor, mixBlendMode: blendMode }} />
</div>`}
      category="advanced"
      demoNumber={2}
      section="blend-modes"
    >
      <InteractiveBlendEditorDemo />
    </DemoPageLayout>
  );
}

