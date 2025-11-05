import { DemoPageLayout } from "@/components/demo-page-layout";
import { CursorFollowingDemo } from "./11-cursor-following";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Cursor Following",
  description: "Make clip-path follow the mouse cursor. Create interactive, cursor-responsive effects.",
  category: "clip-path",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Cursor Following"
      description="Make clip-path follow the mouse cursor. Create interactive, cursor-responsive effects."
      concepts={[
        "Mouse tracking",
        "Dynamic positioning",
        "Interactive effects",
      ]}
      technicalDetails={`onMouseMove={(e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  setClipPath(\`circle(25% at \${x}% \${y}%)\`);
}`}
      category="advanced"
      demoNumber={11}
    >
      <CursorFollowingDemo />
    </DemoPageLayout>
  );
}

