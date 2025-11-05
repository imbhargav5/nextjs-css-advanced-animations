"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function RevealEffectsDemo() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Reveal Effects</h2>
        
        <div className="space-y-6">
          <Button onClick={() => setRevealed(!revealed)} variant="outline">
            {revealed ? "Hide" : "Reveal"}
          </Button>

          {/* Example 1: Slide reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Slide Reveal</h3>
            <div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
              <div
                className={`absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg transition-all duration-700 ${
                  revealed ? "translate-x-full" : "translate-x-0"
                }`}
                style={{
                  backdropFilter: "blur(15px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Slide Reveal</p>
                <p className="text-sm text-gray-600">Slides to reveal content</p>
              </div>
            </div>
          </div>

          {/* Example 2: Fade reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Fade Reveal</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className={`absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl transition-opacity duration-700 ${
                  revealed ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backdropFilter: "blur(20px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Fade Reveal</p>
                <p className="text-sm text-gray-600">Fades to reveal content</p>
              </div>
            </div>
          </div>

          {/* Example 3: Scale reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Scale Reveal</h3>
            <div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className={`absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg transition-transform duration-700 origin-center ${
                  revealed ? "scale-0" : "scale-100"
                }`}
                style={{
                  backdropFilter: "blur(15px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Scale Reveal</p>
                <p className="text-sm text-gray-600">Scales to reveal content</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(15px);
transition: transform 0.7s, opacity 0.7s;
.revealed { transform: translateX(100%); }
/* Creating reveal animations */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

