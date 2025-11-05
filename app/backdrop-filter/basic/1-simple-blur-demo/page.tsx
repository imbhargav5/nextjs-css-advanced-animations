import { DemoPageLayout } from "@/components/demo-page-layout";
import { SimpleBlurDemo } from "./1-simple-blur";

export default function Page() {
  return (
    <DemoPageLayout
      title="Simple Blur"
      description="Learn the basics of backdrop-filter blur, which creates a frosted glass effect by blurring the background behind an element."
      concepts={[
        "Basic backdrop-filter blur syntax",
        "Understanding blur radius values",
        "Using backdrop-filter with semi-transparent backgrounds",
      ]}
      technicalDetails={`backdrop-filter: blur(10px);
/* Applies a blur effect to the background behind the element */
/* Works with semi-transparent backgrounds for glass effect */`}
      category="basic"
      demoNumber={1}
      section="backdrop-filter"
    >
      <SimpleBlurDemo />
    </DemoPageLayout>
  );
}

