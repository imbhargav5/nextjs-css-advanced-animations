import { DemoPageLayout } from "@/components/demo-page-layout";
import { DropdownMenusDemo } from "./7-dropdown-menus";

export default function Page() {
  return (
    <DemoPageLayout
      title="Dropdown Menus"
      description="Create glassmorphism dropdown menus with backdrop-filter blur effects."
      concepts={[
        "Dropdown menu patterns",
        "Positioning with backdrop-filter",
        "Creating floating menus",
      ]}
      technicalDetails={`.dropdown {
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
/* Glassmorphism dropdown menu */`}
      category="intermediate"
      demoNumber={7}
      section="backdrop-filter"
    >
      <DropdownMenusDemo />
    </DemoPageLayout>
  );
}

