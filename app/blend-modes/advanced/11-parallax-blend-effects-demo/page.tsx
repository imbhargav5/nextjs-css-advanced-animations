import { DemoPageLayout } from "@/components/demo-page-layout";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ParallaxBlendEffectsDemo } from "./11-parallax-blend-effects";
export const metadata: Metadata = generateMetadata({
  title: "Parallax Blend Effects",
  description: "Learn how to create parallax scrolling effects using blend modes for depth and visual interest.",
  category: "blend-modes",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Parallax Blend Effects"
      description="Learn how to create parallax scrolling effects using blend modes for depth and visual interest."
      concepts={[
        "Creating parallax effects with blend modes",
        "Combining scroll position with blending",
        "Multi-layer parallax compositions",
      ]}
      technicalDetails={`const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  window.addEventListener('scroll', handleScroll);
}, []);

<div style={{
  mixBlendMode: 'multiply',
  transform: \`translateY(\${scrollY * 0.5}px)\`
}} />

/* Scroll page to see parallax effect */`}
      category="advanced"
      demoNumber={11}
      section="blend-modes"
    >
      <ParallaxBlendEffectsDemo />
    </DemoPageLayout>
  );
}

