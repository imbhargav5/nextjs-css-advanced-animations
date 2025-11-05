import { DemoPageLayout } from "@/components/demo-page-layout";
import { DynamicBlendSwitchingDemo } from "./11-dynamic-blend-switching";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Dynamic Blend Switching",
  description: "Learn how to dynamically switch between blend modes using React state for interactive effects.",
  category: "blend-modes",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Dynamic Blend Switching"
      description="Learn how to dynamically switch between blend modes using React state for interactive effects."
      concepts={[
        "Dynamic blend mode switching with state",
        "Interactive blend mode selection",
        "Creating user-controlled blend effects",
      ]}
      technicalDetails={`const [blendMode, setBlendMode] = useState('multiply');

<div style={{ mixBlendMode: blendMode }}>
  {/* Content */}
</div>

<button onClick={() => setBlendMode('screen')}>
  Switch to Screen
</button>`}
      category="intermediate"
      demoNumber={11}
      section="blend-modes"
    >
      <DynamicBlendSwitchingDemo />
    </DemoPageLayout>
  );
}

