import { DemoPageLayout } from "@/components/demo-page-layout";
import { MaskRevealDemo } from "@/components/demos/intermediate/13-mask-reveal";

export default function Page() {
  return (
    <DemoPageLayout
      title="Mask Reveal Effect"
      description="Use clip-path as a mask to progressively reveal content. Control reveal progress with sliders or animations."
      concepts={[
        "Clip-path as mask",
        "Progressive reveals",
        "Progress control",
      ]}
      technicalDetails={`/* Use clip-path as a mask */
.mask {
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 0.3s;
}
/* Progressively reveal content`}
      category="intermediate"
      demoNumber={13}
    >
      <MaskRevealDemo />
    </DemoPageLayout>
  );
}

