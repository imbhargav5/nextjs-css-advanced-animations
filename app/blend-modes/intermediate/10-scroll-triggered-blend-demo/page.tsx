import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ScrollTriggeredBlendDemo } from "./10-scroll-triggered-blend";
export const metadata: Metadata = generateMetadata({
  title: "Scroll Triggered Blend",
  description: "Learn how to change blend modes dynamically based on scroll position for engaging scroll effects.",
  category: "blend-modes",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Scroll Triggered Blend"
      description="Learn how to change blend modes dynamically based on scroll position for engaging scroll effects."
      concepts={[
        "Dynamic blend mode changes with scroll",
        "Calculating scroll progress",
        "Creating scroll-based animations",
      ]}
      technicalDetails={`const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const progress = window.scrollY / documentHeight;
    setScrollProgress(progress);
  };
  window.addEventListener('scroll', handleScroll);
}, []);

<div style={{ mixBlendMode: blendModes[progress] }} />`}
      category="intermediate"
      demoNumber={10}
      section="blend-modes"
    >
      <ScrollTriggeredBlendDemo />
    </DemoPageLayout>
  );
}

