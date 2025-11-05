"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function DropdownMenusDemo() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Dropdown Menus</h2>

      <DemoBlock
        title="Basic Dropdown"
        code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(!open)} variant="outline">
  Menu ▼
</Button>
{open && (
  <div
    className="absolute top-full mt-2 w-48 bg-white/20 backdrop-blur-lg rounded-lg shadow-xl border border-white/30 overflow-hidden"
    style={{
      backdropFilter: "blur(20px)"
    }}
  >
    <a href="#" className="block px-4 py-2 text-white hover:bg-white/20">Item 1</a>
    <a href="#" className="block px-4 py-2 text-white hover:bg-white/20">Item 2</a>
    <a href="#" className="block px-4 py-2 text-white hover:bg-white/20">Item 3</a>
  </div>
)}

/* Glassmorphism dropdown menu */`}
      >
        <div className="flex justify-center">
          <div className="relative">
            <Button
              onClick={() => setOpen1(!open1)}
              variant="outline"
            >
              Menu ▼
            </Button>
            {open1 && (
              <div
                className="absolute top-full mt-2 w-48 bg-white/20 backdrop-blur-lg rounded-lg shadow-xl border border-white/30 overflow-hidden z-10"
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
      </DemoBlock>

      <DemoBlock
        title="Enhanced Dropdown"
        code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(!open)} variant="outline">
  Options ▼
</Button>
{open && (
  <div
    className="absolute top-full mt-2 w-48 rounded-lg shadow-xl border border-white/40 overflow-hidden"
    style={{
      backdropFilter: "blur(25px) saturate(180%)",
      backgroundColor: "rgba(255, 255, 255, 0.15)"
    }}
  >
    <a href="#" className="block px-4 py-2 text-white hover:bg-white/25">Option A</a>
    <a href="#" className="block px-4 py-2 text-white hover:bg-white/25">Option B</a>
    <a href="#" className="block px-4 py-2 text-white hover:bg-white/25">Option C</a>
  </div>
)}

/* Enhanced with saturation */
backdrop-filter: blur(25px) saturate(180%);`}
      >
        <div className="flex justify-center">
          <div className="relative">
            <Button
              onClick={() => setOpen2(!open2)}
              variant="outline"
            >
              Options ▼
            </Button>
            {open2 && (
              <div
                className="absolute top-full mt-2 w-48 rounded-lg shadow-xl border border-white/40 overflow-hidden z-10"
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
      </DemoBlock>

      <DemoBlock
        title="Context Menu Style"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-md"
    style={{
      backdropFilter: "blur(15px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Right-click area</p>
  </div>
</div>

/* Context menu with blur backdrop */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
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
      </DemoBlock>

      <DemoBlock
        title="Multi-Level Menu"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
    style={{
      backdropFilter: "blur(20px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Nested menus</p>
  </div>
</div>

/* Supports multiple levels */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
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
      </DemoBlock>
    </div>
  );
}

