import { DemoPageLayout } from "@/components/demo-page-layout";
import { EllipseClipDemo } from "./2-ellipse-clip";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Ellipse Clip",
  description: "Explore elliptical clipping shapes. Ellipses allow you to create oval shapes with different horizontal and vertical radii.",
  category: "clip-path",
  level: "basic",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Ellipse Clip"
      description="Explore elliptical clipping shapes. Ellipses allow you to create oval shapes with different horizontal and vertical radii."
      concepts={[
        "Ellipse() function syntax",
        "Horizontal and vertical radius control",
        "Positioning ellipses",
      ]}
      technicalDetails={`clip-path: ellipse(50% 40% at 50% 50%);
/* Syntax: ellipse(rx ry at x y) */
/* rx: horizontal radius */
/* ry: vertical radius`}
      category="basic"
      demoNumber={2}
    >
      <EllipseClipDemo />
    </DemoPageLayout>
  );
}

