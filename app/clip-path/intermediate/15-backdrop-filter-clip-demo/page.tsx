import { DemoPageLayout } from "@/components/demo-page-layout";
import { BackdropFilterClipDemo } from "./15-backdrop-filter-clip";

export default function Page() {
  return (
    <DemoPageLayout
      title="Backdrop Filter with Clip-Path"
      description="Combine clip-path with backdrop-filter for frosted glass effects. Create modern UI elements."
      concepts={[
        "Backdrop-filter",
        "Frosted glass effect",
        "Visual effects",
      ]}
      technicalDetails={`clip-path: circle(40% at 50% 50%);
backdrop-filter: blur(8px) brightness(1.2);
background: rgba(255, 255, 255, 0.2);
/* Clip-path works with backdrop-filter */
/* Creates frosted glass effect`}
      category="intermediate"
      demoNumber={15}
    >
      <BackdropFilterClipDemo />
    </DemoPageLayout>
  );
}

