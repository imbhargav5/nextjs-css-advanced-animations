import { DemoPageLayout } from "@/components/demo-page-layout";
import { ScrollTriggeredDemo } from "./10-scroll-triggered";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Scroll-Triggered Clip",
  description: "Update clip-path based on scroll position. Create reveal animations as users scroll.",
  category: "clip-path",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Scroll-Triggered Clip"
      description="Update clip-path based on scroll position. Create reveal animations as users scroll."
      concepts={[
        "Scroll-based animations",
        "JavaScript integration",
        "Progress calculations",
      ]}
      technicalDetails={`/* Use scroll position to update clip-path */
const progress = scrollY / (docHeight - windowHeight);
element.style.clipPath = \`circle(\${progress * 100}% at 50% 50%)\`;`}
      category="intermediate"
      demoNumber={10}
    >
      <ScrollTriggeredDemo />
    </DemoPageLayout>
  );
}

