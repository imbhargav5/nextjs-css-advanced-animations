import { DemoPageLayout } from "@/components/demo-page-layout";
import { InteractiveFilterControlDemo } from "./15-interactive-filter-control";

export default function Page() {
  return (
    <DemoPageLayout
      title="Interactive Filter Control"
      description="Create interactive controls to adjust backdrop-filter values in real-time."
      concepts={[
        "React state management",
        "Dynamic CSS property updates",
        "Creating filter control panels",
      ]}
      technicalDetails={`const [blur, setBlur] = useState(10);
backdrop-filter: blur(\${blur}px) brightness(\${brightness});
/* Interactive filter controls with React state */`}
      category="intermediate"
      demoNumber={15}
      section="backdrop-filter"
    >
      <InteractiveFilterControlDemo />
    </DemoPageLayout>
  );
}

