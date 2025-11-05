"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ModalOverlayDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Modal Overlay</h2>
        
        <div className="space-y-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Example 1: Light blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Light Blur Overlay</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
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

          {/* Example 2: Strong blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Strong Blur Overlay</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
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
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`/* Backdrop overlay */
backdrop-filter: blur(10px);
background-color: rgba(0, 0, 0, 0.3);
/* Creates a blurred modal backdrop */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

