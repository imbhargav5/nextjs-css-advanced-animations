"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function SidebarWithBlurDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Sidebar with Blur</h2>

      <DemoBlock
        title="Interactive Sidebar with Blurred Backdrop"
        code={`const [isOpen, setIsOpen] = useState(false);

{isOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 bg-black/20 z-40"
      style={{
        backdropFilter: "blur(5px)"
      }}
      onClick={() => setIsOpen(false)}
    />

    {/* Sidebar */}
    <div
      className="fixed top-0 left-0 h-full w-64 p-6 shadow-2xl z-50"
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRight: "1px solid rgba(255, 255, 255, 0.3)"
      }}
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold text-gray-900">Menu</h3>
        <Button onClick={() => setIsOpen(false)}>✕</Button>
      </div>
      <nav className="space-y-2">
        <a href="#" className="block px-4 py-2 text-white/90 hover:bg-white/20 rounded-lg">Home</a>
        <a href="#" className="block px-4 py-2 text-white/90 hover:bg-white/20 rounded-lg">About</a>
      </nav>
    </div>
  </>
)}

/* Glassmorphism sidebar */`}
      >
        <div className="flex justify-center">
          <Button onClick={() => setIsOpen(!isOpen)} variant="outline">
            {isOpen ? "Close Sidebar" : "Open Sidebar"}
          </Button>

          {isOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/20 z-40"
                style={{
                  backdropFilter: "blur(5px)",
                }}
                onClick={() => setIsOpen(false)}
              />

              {/* Sidebar */}
              <div
                className="fixed top-0 left-0 h-full w-64 p-6 shadow-2xl z-50"
                style={{
                  backdropFilter: "blur(20px) saturate(180%)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-gray-900">Menu</h3>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="icon"
                  >
                    ✕
                  </Button>
                </div>
                <nav className="space-y-2">
                  <a href="#" className="block px-4 py-2 text-white/90 hover:bg-white/20 rounded-lg">Home</a>
                  <a href="#" className="block px-4 py-2 text-white/90 hover:bg-white/20 rounded-lg">About</a>
                  <a href="#" className="block px-4 py-2 text-white/90 hover:bg-white/20 rounded-lg">Services</a>
                  <a href="#" className="block px-4 py-2 text-white/90 hover:bg-white/20 rounded-lg">Contact</a>
                </nav>
              </div>
            </>
          )}
        </div>
      </DemoBlock>

      <DemoBlock
        title="Slide-in Sidebar Style"
        code={`<div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30">
  <p className="text-white/90">
    Sidebar slides in with blurred backdrop
  </p>
</div>

/* Glassmorphism sidebar effect */`}
      >
        <div className="flex justify-center">
          <div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30 max-w-md">
            <p className="text-white/90">
              Sidebar slides in with blurred backdrop
            </p>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Glass Sidebar"
        code={`<div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30">
  <p className="text-white/90">
    Glassmorphism sidebar effect
  </p>
</div>

/* Glassmorphism sidebar effect */`}
      >
        <div className="flex justify-center">
          <div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30 max-w-md">
            <p className="text-white/90">
              Glassmorphism sidebar effect
            </p>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
