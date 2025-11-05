"use client";

import { DemoBlock } from "@/components/demo-block";

export function CardHoverEffectsDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Card Hover Effects</h2>

      <DemoBlock
        title="Blur on Hover"
        code={`<div className="relative bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-300 hover:backdrop-blur-xl">
  <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
  <p className="text-white/90">
    Blur increases when hovering over this card
  </p>
</div>

/* Blur increases on hover */
.card {
  backdrop-filter: blur(10px);
  transition: backdrop-filter 0.3s;
}
.card:hover {
  backdrop-filter: blur(20px);
}`}
      >
        <div className="flex justify-center">
          <div className="relative bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-300 hover:backdrop-blur-xl max-w-md">
            <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
            <p className="text-white/90">
              Blur increases when hovering over this card
            </p>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Brightness on Hover"
        code={`<div
  className="relative bg-white/20 p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-300"
  style={{
    backdropFilter: "blur(10px) brightness(0.9)"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backdropFilter = "blur(10px) brightness(1.2)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backdropFilter = "blur(10px) brightness(0.9)";
  }}
>
  <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
  <p className="text-white/90">
    Background brightens on hover
  </p>
</div>

/* Background brightens on hover */`}
      >
        <div className="flex justify-center">
          <div
            className="relative bg-white/20 p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-300 max-w-md"
            style={{
              backdropFilter: "blur(10px) brightness(0.9)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backdropFilter = "blur(10px) brightness(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backdropFilter = "blur(10px) brightness(0.9)";
            }}
          >
            <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
            <p className="text-white/90">
              Background brightens on hover
            </p>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Saturate on Hover"
        code={`<div
  className="relative bg-white/20 p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-300"
  style={{
    backdropFilter: "blur(10px) saturate(0.8)"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backdropFilter = "blur(10px) saturate(1.5)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backdropFilter = "blur(10px) saturate(0.8)";
  }}
>
  <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
  <p className="text-white/90">
    Colors become more vibrant
  </p>
</div>

/* Colors become more vibrant */`}
      >
        <div className="flex justify-center">
          <div
            className="relative bg-white/20 p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-300 max-w-md"
            style={{
              backdropFilter: "blur(10px) saturate(0.8)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backdropFilter = "blur(10px) saturate(1.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backdropFilter = "blur(10px) saturate(0.8)";
            }}
          >
            <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
            <p className="text-white/90">
              Colors become more vibrant
            </p>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Complex Hover Effect"
        code={`<div
  className="relative bg-white/20 p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-500"
  style={{
    backdropFilter: "blur(8px) brightness(0.95) saturate(1.0)"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backdropFilter = "blur(20px) brightness(1.1) saturate(1.5)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backdropFilter = "blur(8px) brightness(0.95) saturate(1.0)";
  }}
>
  <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
  <p className="text-white/90">
    Multiple filters change on hover
  </p>
</div>

/* Multiple filters change on hover */
.card {
  backdrop-filter: blur(8px) brightness(0.95) saturate(1.0);
  transition: backdrop-filter 0.5s;
}
.card:hover {
  backdrop-filter: blur(20px) brightness(1.1) saturate(1.5);
}`}
      >
        <div className="flex justify-center">
          <div
            className="relative bg-white/20 p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-500 max-w-md"
            style={{
              backdropFilter: "blur(8px) brightness(0.95) saturate(1.0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backdropFilter = "blur(20px) brightness(1.1) saturate(1.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backdropFilter = "blur(8px) brightness(0.95) saturate(1.0)";
            }}
          >
            <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
            <p className="text-white/90">
              Multiple filters change on hover
            </p>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
