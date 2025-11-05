import { DemoPageLayout } from "@/components/demo-page-layout";
import { ComplexTransitionsDemo } from "@/components/demos/advanced/13-complex-transitions";

export default function Page() {
  return (
    <DemoPageLayout
      title="Complex Transition Sequences"
      description="Sequence multiple clip-path transitions with delays and different timing functions."
      concepts={[
        "Transition sequences",
        "Timing functions",
        "Delays and staggers",
      ]}
      technicalDetails={`const shapes = [shape1, shape2, shape3];
element.style.clipPath = shapes[currentIndex];
element.style.transition = 'clip-path 1s ease-in-out';
element.style.transitionDelay = '200ms';`}
      category="advanced"
      demoNumber={13}
    >
      <ComplexTransitionsDemo />
    </DemoPageLayout>
  );
}

