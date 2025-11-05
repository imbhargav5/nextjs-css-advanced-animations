"use client";

import { DemoBlock } from "@/components/demo-block";

export function NavigationBarDemo() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Glassmorphism Navigation Bar</h2>

      <DemoBlock
        title="Fixed Glass Navbar"
        code={`<nav
  className="px-6 py-4 flex items-center justify-between border-b border-white/20"
  style={{
    backdropFilter: "blur(20px) saturate(180%)",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  }}
>
  <div className="text-white font-bold text-xl">Logo</div>
  <div className="flex gap-4">
    <a href="#" className="text-white/90 hover:text-gray-900">Home</a>
    <a href="#" className="text-white/90 hover:text-gray-900">About</a>
    <a href="#" className="text-white/90 hover:text-gray-900">Contact</a>
  </div>
</nav>

/* Glassmorphism navigation bar */
nav {
  backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}`}
      >
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 -z-10 h-32" />
          <nav
            className="relative px-6 py-4 flex items-center justify-between border-b border-white/20"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="text-white font-bold text-xl">Logo</div>
            <div className="flex gap-4">
              <a href="#" className="text-white/90 hover:text-gray-900">Home</a>
              <a href="#" className="text-white/90 hover:text-gray-900">About</a>
              <a href="#" className="text-white/90 hover:text-gray-900">Contact</a>
            </div>
          </nav>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Sticky Glass Navbar"
        code={`<nav
  className="px-6 py-4 flex items-center justify-between border-b border-white/30"
  style={{
    backdropFilter: "blur(15px) brightness(1.1)",
    backgroundColor: "rgba(255, 255, 255, 0.15)"
  }}
>
  <div className="text-white font-bold text-xl">Brand</div>
  <div className="flex gap-4">
    <a href="#" className="text-white/90 hover:text-gray-900">Services</a>
    <a href="#" className="text-white/90 hover:text-gray-900">Portfolio</a>
    <a href="#" className="text-white/90 hover:text-gray-900">Blog</a>
  </div>
</nav>

/* Enhanced with brightness */
backdrop-filter: blur(15px) brightness(1.1);`}
      >
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 -z-10 h-32" />
          <nav
            className="relative px-6 py-4 flex items-center justify-between border-b border-white/30"
            style={{
              backdropFilter: "blur(15px) brightness(1.1)",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
            }}
          >
            <div className="text-white font-bold text-xl">Brand</div>
            <div className="flex gap-4">
              <a href="#" className="text-white/90 hover:text-gray-900">Services</a>
              <a href="#" className="text-white/90 hover:text-gray-900">Portfolio</a>
              <a href="#" className="text-white/90 hover:text-gray-900">Blog</a>
            </div>
          </nav>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Compact Glass Navbar"
        code={`<nav
  className="px-6 py-3 flex items-center justify-between"
  style={{
    backdropFilter: "blur(25px) saturate(200%)",
    backgroundColor: "rgba(255, 255, 255, 0.08)"
  }}
>
  <div className="text-white font-bold">Nav</div>
  <div className="flex gap-3 text-sm">
    <a href="#" className="text-white/90 hover:text-gray-900">Item 1</a>
    <a href="#" className="text-white/90 hover:text-gray-900">Item 2</a>
    <a href="#" className="text-white/90 hover:text-gray-900">Item 3</a>
  </div>
</nav>

/* Compact design with strong blur */
backdrop-filter: blur(25px) saturate(200%);`}
      >
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 -z-10 h-20" />
          <nav
            className="relative px-6 py-3 flex items-center justify-between"
            style={{
              backdropFilter: "blur(25px) saturate(200%)",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            }}
          >
            <div className="text-white font-bold">Nav</div>
            <div className="flex gap-3 text-sm">
              <a href="#" className="text-white/90 hover:text-gray-900">Item 1</a>
              <a href="#" className="text-white/90 hover:text-gray-900">Item 2</a>
              <a href="#" className="text-white/90 hover:text-gray-900">Item 3</a>
            </div>
          </nav>
        </div>
      </DemoBlock>
    </div>
  );
}

