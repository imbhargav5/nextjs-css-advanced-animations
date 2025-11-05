"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function ModalOverlayDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Modal Overlay</h2>

      <DemoBlock
        title="Interactive Modal with Blurred Backdrop"
        code={`const [isOpen, setIsOpen] = useState(false);

{isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Backdrop with blur */}
    <div
      className="absolute inset-0 bg-black/30"
      style={{ backdropFilter: "blur(10px)" }}
      onClick={() => setIsOpen(false)}
    />

    {/* Modal */}
    <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-md w-full z-10">
      <h3 className="text-2xl font-bold mb-4">Modal Title</h3>
      <p className="text-gray-600 mb-6">
        This modal has a blurred backdrop overlay.
      </p>
      <Button onClick={() => setIsOpen(false)}>Close</Button>
    </div>
  </div>
)}

/* Backdrop overlay creates depth and focus */`}
      >
        <div className="flex justify-center">
          <Button onClick={() => setIsOpen(true)} variant="outline">
            Open Modal
          </Button>

          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop with blur */}
              <div
                className="absolute inset-0 bg-black/30"
                style={{
                  backdropFilter: "blur(10px)",
                }}
                onClick={() => setIsOpen(false)}
              />

              {/* Modal */}
              <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-md w-full z-10">
                <h3 className="text-2xl font-bold mb-4">Modal Title</h3>
                <p className="text-gray-600 mb-6">
                  This modal has a blurred backdrop overlay. Click outside to close.
                </p>
                <Button onClick={() => setIsOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </DemoBlock>

      <DemoBlock
        title="Light Blur Overlay"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-black/20 rounded-lg"
    style={{
      backdropFilter: "blur(5px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Light blur</p>
  </div>
</div>

/* Subtle backdrop effect */
backdrop-filter: blur(5px);
background-color: rgba(0, 0, 0, 0.2);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-black/20 rounded-lg"
              style={{
                backdropFilter: "blur(5px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Light blur</p>
              <p className="text-sm text-gray-600">Subtle backdrop effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Strong Blur Overlay"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
  <div
    className="absolute inset-0 bg-black/30 rounded-lg"
    style={{
      backdropFilter: "blur(20px)"
    }}
  />
  <div className="relative z-10">
    <p className="text-gray-800 font-semibold">Strong blur</p>
  </div>
</div>

/* Heavy backdrop effect */
backdrop-filter: blur(20px);
background-color: rgba(0, 0, 0, 0.3);`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
            <div
              className="absolute inset-0 bg-black/30 rounded-lg"
              style={{
                backdropFilter: "blur(20px)",
              }}
            />
            <div className="relative z-10">
              <p className="text-gray-800 font-semibold">Strong blur</p>
              <p className="text-sm text-gray-600">Heavy backdrop effect</p>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

