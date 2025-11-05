import { DemoPageLayout } from "@/components/demo-page-layout";
import { BlendModeTransformsDemo } from "./15-blend-mode-transforms";

export default function Page() {
  return (
    <DemoPageLayout
      title="Blend Mode Transforms"
      description="Learn how to combine blend modes with CSS transforms (rotate, scale, skew) for dynamic animated effects."
      concepts={[
        "Combining blend modes with transforms",
        "Animating transforms with blend modes",
        "Creating dynamic blend effects with transforms",
      ]}
      technicalDetails={`const [rotation, setRotation] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setRotation((prev) => (prev + 1) % 360);
  }, 16);
  return () => clearInterval(interval);
}, []);

<div style={{
  mixBlendMode: 'multiply',
  transform: \`rotate(\${rotation}deg) scale(\${scale})\`
}} />

/* Transforms create dynamic blend effects */
/* Rotation, scale, skew all work beautifully */`}
      category="advanced"
      demoNumber={15}
      section="blend-modes"
    >
      <BlendModeTransformsDemo />
    </DemoPageLayout>
  );
}

