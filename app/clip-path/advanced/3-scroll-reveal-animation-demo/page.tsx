import { DemoPageLayout } from "@/components/demo-page-layout";
import { ScrollRevealAnimationDemo } from "./3-scroll-reveal-animation";

export default function Page() {
  return (
    <DemoPageLayout
      title="Advanced Scroll Reveal"
      description="Complex scroll-based reveal animations with multiple stages and parallax effects."
      concepts={[
        "Advanced scroll animations",
        "Parallax effects",
        "Multiple stages",
      ]}
      technicalDetails={`const progress = scrollY / (docHeight - windowHeight);
element.style.clipPath = \`circle(\${progress * 100}% at \${50 + progress * 30}% \${50 + progress * 20}%)\`;`}
      category="advanced"
      demoNumber={3}
    >
      <ScrollRevealAnimationDemo />
    </DemoPageLayout>
  );
}

