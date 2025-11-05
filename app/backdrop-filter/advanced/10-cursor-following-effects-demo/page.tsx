import { DemoPageLayout } from "@/components/demo-page-layout";
import { CursorFollowingEffectsDemo } from "./10-cursor-following-effects";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Cursor Following Effects",
  description: "Create interactive cursor-following effects using backdrop-filter that respond to mouse movement.",
  category: "backdrop-filter",
  level: "advanced",
});

export default function Page() {
  return (
    <DemoPageLayout
      title="Cursor Following Effects"
      description="Create interactive cursor-following effects using backdrop-filter that respond to mouse movement."
      concepts={[
        "Mouse tracking",
        "Dynamic positioning",
        "Creating interactive blur effects",
      ]}
      technicalDetails={`const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(() => {
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener("mousemove", handleMouseMove);
}, []);
backdrop-filter: blur(25px);
left: \${position.x}px;
top: \${position.y}px;
/* Cursor following backdrop-filter */`}
      category="advanced"
      demoNumber={10}
      section="backdrop-filter"
    >
      <CursorFollowingEffectsDemo />
    </DemoPageLayout>
  );
}

