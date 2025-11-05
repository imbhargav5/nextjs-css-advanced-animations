import { DemoPageLayout } from "@/components/demo-page-layout";
import { SidebarWithBlurDemo } from "./9-sidebar-with-blur";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Sidebar with Blur",
  description: "Create glassmorphism sidebars with backdrop-filter blur effects.",
  category: "backdrop-filter",
  level: "intermediate",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Sidebar with Blur"
      description="Create glassmorphism sidebars with backdrop-filter blur effects."
      concepts={[
        "Sidebar navigation patterns",
        "Overlay backdrops",
        "Creating sliding panels",
      ]}
      technicalDetails={`.sidebar {
  backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.15);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
}
/* Glassmorphism sidebar */`}
      category="intermediate"
      demoNumber={9}
      section="backdrop-filter"
    >
      <SidebarWithBlurDemo />
    </DemoPageLayout>
  );
}

