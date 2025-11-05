import { DemoPageLayout } from "@/components/demo-page-layout";
import { BrightnessDemo } from "./2-brightness";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Brightness",
  description: "Learn how backdrop-filter brightness adjusts the brightness of the background behind an element.",
  category: "backdrop-filter",
  level: "basic",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Brightness"
      description="Learn how backdrop-filter brightness adjusts the brightness of the background behind an element."
      concepts={[
        "Brightness value range (0 to infinity)",
        "Understanding brightness multipliers",
        "Creating darker or brighter overlays",
      ]}
      technicalDetails={`backdrop-filter: brightness(1.5);
/* Values: 0-1 (darker), 1 (normal), >1 (brighter) */
/* Adjusts the brightness of the background behind the element */`}
      category="basic"
      demoNumber={2}
      section="backdrop-filter"
    >
      <BrightnessDemo />
    </DemoPageLayout>
  );
}

