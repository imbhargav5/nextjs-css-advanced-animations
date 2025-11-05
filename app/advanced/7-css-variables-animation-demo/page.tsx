import { DemoPageLayout } from "@/components/demo-page-layout";
import { CssVariablesAnimationDemo } from "@/components/demos/advanced/7-css-variables-animation";

export default function Page() {
  return (
    <DemoPageLayout
      title="CSS Variables Animation"
      description="Use CSS custom properties to animate clip-path values. Create dynamic, themeable animations."
      concepts={[
        "CSS custom properties",
        "Variable-based animation",
        "Dynamic values",
      ]}
      technicalDetails={`element.style.setProperty('--radius', radius + '%');
element.style.clipPath = 'circle(var(--radius) at 50% 50%)';
/* Use CSS variables for dynamic clip-paths`}
      category="advanced"
      demoNumber={7}
    >
      <CssVariablesAnimationDemo />
    </DemoPageLayout>
  );
}

