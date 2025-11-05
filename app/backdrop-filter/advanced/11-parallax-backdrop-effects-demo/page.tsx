import { DemoPageLayout } from "@/components/demo-page-layout";
import { ParallaxBackdropEffectsDemo } from "./11-parallax-backdrop-effects";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Parallax Backdrop Effects",
  description: "Create parallax scrolling effects combined with dynamic backdrop-filter blur.",
  category: "backdrop-filter",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Parallax Backdrop Effects"
      description="Create parallax scrolling effects combined with dynamic backdrop-filter blur."
      concepts={[
        "Parallax scrolling",
        "Scroll-based blur changes",
        "Creating depth with parallax",
      ]}
      technicalDetails={`const blur = 10 + scrollY / 20;
const translateY = scrollY * 0.5;
backdrop-filter: blur(\${blur}px);
transform: translateY(\${translateY}px);
/* Parallax with dynamic blur */`}
      category="advanced"
      demoNumber={11}
      section="backdrop-filter"
    >
      <ParallaxBackdropEffectsDemo />
    </DemoPageLayout>
  );
}

