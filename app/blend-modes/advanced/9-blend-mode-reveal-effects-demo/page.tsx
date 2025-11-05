import { DemoPageLayout } from "@/components/demo-page-layout";
import { BlendModeRevealEffectsDemo } from "./9-blend-mode-reveal-effects";

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode Reveal Effects"
      description="Learn how to create reveal animations using blend modes combined with clip-path, transforms, and opacity."
      concepts={[
        "Creating reveal effects with blend modes",
        "Combining clip-path with blending",
        "Using transforms for reveal animations",
      ]}
      technicalDetails={`const [progress, setProgress] = useState(0);

<div style={{
  mixBlendMode: 'multiply',
  clipPath: \`circle(\${progress * 100}%)\`,
  opacity: progress
}} />

/* Reveal effects combine blend modes */
/* with transforms and clip-path */`}
      category="advanced"
      demoNumber={9}
      section="blend-modes"
    >
      <BlendModeRevealEffectsDemo />
    </DemoPageLayout>
  );
}

