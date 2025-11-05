import { DemoPageLayout } from "@/components/demo-page-layout";
import { InsetRoundedDemo } from "@/components/demos/basic/10-inset-rounded";

export default function Page() {
  return (
    <DemoPageLayout
      title="Inset with Rounded Corners"
      description="Combine inset() with rounded corners using the 'round' keyword. Create frames with rounded inner corners."
      concepts={[
        "Inset round syntax",
        "Rounded inner corners",
        "Combining inset and rounding",
      ]}
      technicalDetails={`clip-path: inset(10% round 20px);
/* Shorthand: all corners */
clip-path: inset(15% round 30px 10px 40px 5px);
/* Syntax: inset(top right bottom left round top-left top-right bottom-right bottom-left)`}
      category="basic"
      demoNumber={10}
    >
      <InsetRoundedDemo />
    </DemoPageLayout>
  );
}

