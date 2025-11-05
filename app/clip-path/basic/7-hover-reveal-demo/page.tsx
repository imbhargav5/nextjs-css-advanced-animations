import { DemoPageLayout } from "@/components/demo-page-layout";
import { HoverRevealDemo } from "./7-hover-reveal";

export default function Page() {
  return (
    <DemoPageLayout
      title="Hover Reveal"
      description="Create interactive hover effects using clip-path transitions. Reveal content with smooth animations."
      concepts={[
        "CSS transitions with clip-path",
        "Hover states",
        "Animation timing",
      ]}
      technicalDetails={`transition: clip-path 0.3s ease-out;
clip-path: circle(0% at 50% 50%);
.element:hover {
  clip-path: circle(150% at 50% 50%);
}`}
      category="basic"
      demoNumber={7}
    >
      <HoverRevealDemo />
    </DemoPageLayout>
  );
}

