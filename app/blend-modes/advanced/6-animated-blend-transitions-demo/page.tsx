import { DemoPageLayout } from "@/components/demo-page-layout";
import { AnimatedBlendTransitionsDemo } from "./6-animated-blend-transitions";

export default function Page() {
  return (
    <DemoPageLayout
      title="Animated Blend Transitions"
      description="Learn how to create complex animated transitions combining blend modes with transforms, opacity, and filters."
      concepts={[
        "Animating blend modes with multiple properties",
        "Combining transforms, opacity, and filters",
        "Creating smooth blend mode transitions",
      ]}
      technicalDetails={`const [progress, setProgress] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => (prev + 0.01) % 1);
  }, 16);
  return () => clearInterval(interval);
}, []);

<div style={{
  mixBlendMode: currentMode,
  opacity: 1 - localProgress,
  transform: \`scale(\${scale}) rotate(\${angle}deg)\`,
  filter: \`blur(\${blur}px)\`
}} />`}
      category="advanced"
      demoNumber={6}
      section="blend-modes"
    >
      <AnimatedBlendTransitionsDemo />
    </DemoPageLayout>
  );
}

