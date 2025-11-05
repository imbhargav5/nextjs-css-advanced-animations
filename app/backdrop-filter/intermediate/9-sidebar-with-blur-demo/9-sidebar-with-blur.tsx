"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SidebarWithBlurDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Sidebar with Blur</h2>
        
        <div className="space-y-4">
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

        {/* Example cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Slide-in Sidebar</h3>
            <div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30">
              <p className="text-white/90">
                Sidebar slides in with blurred backdrop
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Glass Sidebar</h3>
            <div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30">
              <p className="text-white/90">
                Glassmorphism sidebar effect
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.sidebar {
  backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.15);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
}
/* Glassmorphism sidebar */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

