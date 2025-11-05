import { DemoPageLayout } from "@/components/demo-page-layout";
import { CursorFollowingDemo } from "./11-cursor-following";

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

