import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { BlendModeMorphingDemo } from "./3-blend-mode-morphing";
export const metadata: Metadata = generateMetadata({
  title: "Blend Mode Morphing",
  description: "Learn how to create smooth morphing effects between different blend modes using opacity transitions.",
  category: "blend-modes",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode Morphing"
      description="Learn how to create smooth morphing effects between different blend modes using opacity transitions."
      concepts={[
        "Morphing between blend modes",
        "Using opacity to transition blend modes",
        "Creating seamless blend mode animations",
      ]}
      technicalDetails={`const [progress, setProgress] = useState(0);
const blendModes = ['multiply', 'screen', 'overlay'];

const currentMode = blendModes[Math.floor(progress * blendModes.length)];
const nextMode = blendModes[(currentIndex + 1) % blendModes.length];
const localProgress = (progress * blendModes.length) % 1;

<div style={{ mixBlendMode: currentMode, opacity: 1 - localProgress }} />
<div style={{ mixBlendMode: nextMode, opacity: localProgress }} />`}
      category="advanced"
      demoNumber={3}
      section="blend-modes"
    >
      <BlendModeMorphingDemo />
    </DemoPageLayout>
  );
}

