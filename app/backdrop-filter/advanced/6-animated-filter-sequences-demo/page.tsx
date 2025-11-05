import { DemoPageLayout } from "@/components/demo-page-layout";
import { AnimatedFilterSequencesDemo } from "./6-animated-filter-sequences";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Animated Filter Sequences",
  description: "Create animated sequences that automatically cycle through different backdrop-filter states.",
  category: "backdrop-filter",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Animated Filter Sequences"
      description="Create animated sequences that automatically cycle through different backdrop-filter states."
      concepts={[
        "Automatic animation sequences",
        "Timer-based state changes",
        "Creating dynamic filter animations",
      ]}
      technicalDetails={`useEffect(() => {
  const interval = setInterval(() => {
    setSequence((prev) => (prev + 1) % sequences.length);
  }, 2000);
  return () => clearInterval(interval);
}, []);
backdrop-filter: blur(\${current.blur}px);
transition: backdrop-filter 1s;
/* Animated sequence cycling */`}
      category="advanced"
      demoNumber={6}
      section="backdrop-filter"
    >
      <AnimatedFilterSequencesDemo />
    </DemoPageLayout>
  );
}

