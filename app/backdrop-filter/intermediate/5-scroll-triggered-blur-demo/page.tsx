import { DemoPageLayout } from "@/components/demo-page-layout";
import { ScrollTriggeredBlurDemo } from "./5-scroll-triggered-blur";

export default function Page() {
  return (
    <DemoPageLayout
      title="Scroll-Triggered Blur"
      description="Create dynamic backdrop-filter blur effects that respond to scroll position."
      concepts={[
        "JavaScript scroll listeners",
        "Dynamic backdrop-filter values",
        "Creating scroll-responsive effects",
      ]}
      technicalDetails={`const blurAmount = Math.min(scrollY / 10, 30);
backdrop-filter: blur(\${blurAmount}px);
/* Blur intensity changes based on scroll position */`}
      category="intermediate"
      demoNumber={5}
      section="backdrop-filter"
    >
      <ScrollTriggeredBlurDemo />
    </DemoPageLayout>
  );
}

