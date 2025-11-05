import { DemoPageLayout } from "@/components/demo-page-layout";
import { InteractiveFilterEditorDemo } from "./2-interactive-filter-editor";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Interactive Filter Editor",
  description: "Create a comprehensive filter editor with controls for all backdrop-filter properties.",
  category: "backdrop-filter",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Interactive Filter Editor"
      description="Create a comprehensive filter editor with controls for all backdrop-filter properties."
      concepts={[
        "Complete filter control panel",
        "Real-time filter preview",
        "Generating CSS from controls",
      ]}
      technicalDetails={`backdrop-filter: blur(10px) brightness(1.0) contrast(1.0) saturate(1.0) grayscale(0) sepia(0) hue-rotate(0deg) invert(0) opacity(1.0);
/* Full control panel for all backdrop-filter properties */`}
      category="advanced"
      demoNumber={2}
      section="backdrop-filter"
    >
      <InteractiveFilterEditorDemo />
    </DemoPageLayout>
  );
}

