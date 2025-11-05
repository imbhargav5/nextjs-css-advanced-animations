import { DemoPageLayout } from "@/components/demo-page-layout";
import { CursorFollowingBlendDemo } from "./10-cursor-following-blend";

export default function Page() {
  return (
    <DemoPageLayout
      title="Cursor Following Blend"
      description="Learn how to create interactive blend effects that follow the mouse cursor for engaging user interactions."
      concepts={[
        "Tracking mouse position for blend effects",
        "Creating interactive blend animations",
        "Combining blend modes with cursor tracking",
      ]}
      technicalDetails={`const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener('mousemove', handleMouseMove);
}, []);

<div style={{
  mixBlendMode: 'multiply',
  transform: \`translate(\${x}px, \${y}px)\`
}} />`}
      category="advanced"
      demoNumber={10}
      section="blend-modes"
    >
      <CursorFollowingBlendDemo />
    </DemoPageLayout>
  );
}

