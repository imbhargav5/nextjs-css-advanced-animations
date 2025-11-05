"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function DropdownMenusDemo() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Dropdown Menus</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Basic dropdown */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Basic Dropdown</h3>
            <div className="relative">
              <Button
                onClick={() => setOpen1(!open1)}
                variant="outline"
              >
                Menu ▼
              </Button>
              {open1 && (
                <div
                  className="absolute top-full mt-2 w-48 bg-white/20 backdrop-blur-lg rounded-lg shadow-xl border border-white/30 overflow-hidden"
                  style={{
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white/20">Item 1</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white/20">Item 2</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white/20">Item 3</a>
                </div>
              )}
            </div>
          </div>

          {/* Example 2: Enhanced dropdown */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Enhanced Dropdown</h3>
            <div className="relative">
              <Button
                onClick={() => setOpen2(!open2)}
                variant="outline"
              >
                Options ▼
              </Button>
              {open2 && (
                <div
                  className="absolute top-full mt-2 w-48 rounded-lg shadow-xl border border-white/40 overflow-hidden"
                  style={{
                    backdropFilter: "blur(25px) saturate(180%)",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white/25">Option A</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white/25">Option B</a>
                  <a href="#" className="block px-4 py-2 text-white hover:bg-white/25">Option C</a>
                </div>
              )}
            </div>
          </div>

          {/* Example 3: Context menu */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Context Menu</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-md"
                style={{
                  backdropFilter: "blur(15px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Right-click area</p>
                <p className="text-sm text-gray-600">Menu with blur backdrop</p>
              </div>
            </div>
          </div>

          {/* Example 4: Multi-level dropdown */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Multi-Level Menu</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(20px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Nested menus</p>
                <p className="text-sm text-gray-600">Supports multiple levels</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.dropdown {
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
/* Glassmorphism dropdown menu */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

