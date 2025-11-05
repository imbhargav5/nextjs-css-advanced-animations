import { DemoPageLayout } from "@/components/demo-page-layout";
import { InteractiveEditorDemo } from "./2-interactive-editor";

export default function Page() {
  return (
    <DemoPageLayout
      title="Interactive Clip-Path Editor"
      description="Live editor with controls to adjust clip-path values in real-time. Experiment with different parameters."
      concepts={[
        "Interactive controls",
        "Real-time updates",
        "Parameter adjustment",
      ]}
      technicalDetails={`/* Use state to control clip-path values */
const [radius, setRadius] = useState(40);
const clipPath = \`circle(\${radius}% at 50% 50%)\`;
element.style.clipPath = clipPath;`}
      category="advanced"
      demoNumber={2}
    >
      <InteractiveEditorDemo />
    </DemoPageLayout>
  );
}

