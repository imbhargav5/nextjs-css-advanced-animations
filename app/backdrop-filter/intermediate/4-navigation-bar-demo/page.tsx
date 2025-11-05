import { DemoPageLayout } from "@/components/demo-page-layout";
import { NavigationBarDemo } from "./4-navigation-bar";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Navigation Bar",
  description: "Create modern glassmorphism navigation bars with backdrop-filter effects.",
  category: "backdrop-filter",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Navigation Bar"
      description="Create modern glassmorphism navigation bars with backdrop-filter effects."
      concepts={[
        "Navigation bar glassmorphism",
        "Using backdrop-filter in headers",
        "Creating sticky glass effects",
      ]}
      technicalDetails={`nav {
  backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
/* Glassmorphism navigation bar */`}
      category="intermediate"
      demoNumber={4}
      section="backdrop-filter"
    >
      <NavigationBarDemo />
    </DemoPageLayout>
  );
}

