import { DemoPageLayout } from "@/components/demo-page-layout";
import { MaskRevealDemo } from "./13-mask-reveal";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Mask Reveal Effect",
  description: "Use clip-path as a mask to progressively reveal content. Control reveal progress with sliders or animations.",
  category: "clip-path",
  level: "intermediate",
});

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

