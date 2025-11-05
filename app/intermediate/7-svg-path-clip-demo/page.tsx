import { DemoPageLayout } from "@/components/demo-page-layout";
import { SvgPathClipDemo } from "@/components/demos/intermediate/7-svg-path-clip";

export default function Page() {
  return (
    <DemoPageLayout
      title="SVG Path Clip"
      description="Use SVG path syntax for complex custom shapes. Create any shape you can imagine with path commands."
      concepts={[
        "SVG path syntax",
        "Path commands (M, L, Q, T)",
        "Custom shapes",
      ]}
      technicalDetails={`clip-path: path('M 0,100 Q 50,0 100,100 T 200,100');
/* SVG path syntax */
/* M = Move to, Q = Quadratic curve, T = Smooth curve */
/* Use url() for external SVG references`}
      category="intermediate"
      demoNumber={7}
    >
      <SvgPathClipDemo />
    </DemoPageLayout>
  );
}

