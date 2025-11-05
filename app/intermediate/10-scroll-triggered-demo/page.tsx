import { DemoPageLayout } from "@/components/demo-page-layout";
import { ScrollTriggeredDemo } from "@/components/demos/intermediate/10-scroll-triggered";

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

