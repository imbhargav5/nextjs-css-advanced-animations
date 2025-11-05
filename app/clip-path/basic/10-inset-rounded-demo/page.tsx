import { DemoPageLayout } from "@/components/demo-page-layout";
import { InsetRoundedDemo } from "./10-inset-rounded";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Inset with Rounded Corners",
  description: "Combine inset() with rounded corners using the 'round' keyword. Create frames with rounded inner corners.",
  category: "clip-path",
  level: "basic",
});

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

