import { DemoPageLayout } from "@/components/demo-page-layout";
import { ParallaxClippingDemo } from "@/components/demos/advanced/12-parallax-clipping";

export default function Page() {
  return (
    <DemoPageLayout
      title="Parallax Clipping"
      description="Create parallax scrolling effects using clip-path. Different scroll speeds create depth."
      concepts={[
        "Parallax scrolling",
        "Multiple scroll speeds",
        "Depth effects",
      ]}
      technicalDetails={`const scrollY = window.scrollY;
element.style.clipPath = \`polygon(0% 0%, \${50 + scrollY / 20}% 0%, ...)\`;
/* Use different scroll multipliers for parallax effect`}
      category="advanced"
      demoNumber={12}
    >
      <ParallaxClippingDemo />
    </DemoPageLayout>
  );
}

