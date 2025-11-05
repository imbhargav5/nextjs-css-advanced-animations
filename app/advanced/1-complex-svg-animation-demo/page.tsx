import { DemoPageLayout } from "@/components/demo-page-layout";
import { ComplexSvgAnimationDemo } from "@/components/demos/advanced/1-complex-svg-animation";

export default function Page() {
  return (
    <DemoPageLayout
      title="Complex SVG Animation"
      description="Animate complex SVG paths with JavaScript. Create dynamic wave patterns and complex shapes."
      concepts={[
        "SVG path animation",
        "Dynamic path generation",
        "Mathematical functions",
      ]}
      technicalDetails={`const wavePath = (progress) => {
  let path = 'M 0,50';
  for (let x = 0; x <= 100; x += 2) {
    const y = 50 + 20 * Math.sin(x / 10 + progress);
    path += \` L \${x},\${y}\`;
  }
  return \`path('\${path} Z')\`;
};`}
      category="advanced"
      demoNumber={1}
    >
      <ComplexSvgAnimationDemo />
    </DemoPageLayout>
  );
}

