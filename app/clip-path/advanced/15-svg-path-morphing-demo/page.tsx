import { DemoPageLayout } from "@/components/demo-page-layout";
import { SvgPathMorphingDemo } from "./15-svg-path-morphing";

export default function Page() {
  return (
    <DemoPageLayout
      title="SVG Path Morphing"
      description="Morph between complex SVG paths dynamically. Create fluid shape transitions."
      concepts={[
        "SVG path morphing",
        "Dynamic path generation",
        "Complex transitions",
      ]}
      technicalDetails={`const morphPath = (progress) => {
  let path = 'M 50,50 ';
  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const radius = 40 + progress * 10;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    path += \`L \${x},\${y} \`;
  }
  return \`path('\${path} Z')\`;
};`}
      category="advanced"
      demoNumber={15}
    >
      <SvgPathMorphingDemo />
    </DemoPageLayout>
  );
}

