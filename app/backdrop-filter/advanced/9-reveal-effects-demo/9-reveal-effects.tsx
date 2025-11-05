"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function RevealEffectsDemo() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Reveal Effects</h2>

      <div className="flex justify-center mb-4">
        <Button onClick={() => setRevealed(!revealed)} variant="outline">
          {revealed ? "Hide" : "Reveal"}
        </Button>
      </div>

      <DemoBlock
        title="Slide Reveal"
        code={`const [revealed, setRevealed] = useState(false);

<div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
  <div
    className={\`absolute inset-0 bg-white/30 rounded-lg transition-all duration-700 \${
      revealed ? "translate-x-full" : "translate-x-0"
    }\`}
    style={{ backdropFilter: "blur(15px)" }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px);
transition: transform 0.7s;
transform: translateX(100%); /* when revealed */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg overflow-hidden w-full max-w-md h-48">
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
      </DemoBlock>

      <DemoBlock
        title="Fade Reveal"
        code={`<div className="relative p-6 rounded-lg shadow-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
  <div
    className={\`absolute inset-0 bg-white/30 rounded-lg transition-opacity duration-700 \${
      revealed ? "opacity-0" : "opacity-100"
    }\`}
    style={{ backdropFilter: "blur(20px)" }}
  />
</div>

/* CSS */
backdrop-filter: blur(20px);
transition: opacity 0.7s;
opacity: 0; /* when revealed */`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg w-full max-w-md h-48">
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
      </DemoBlock>

      <DemoBlock
        title="Scale Reveal"
        code={`<div className="relative p-6 rounded-lg shadow-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
  <div
    className={\`absolute inset-0 bg-white/30 rounded-lg transition-transform duration-700 origin-center \${
      revealed ? "scale-0" : "scale-100"
    }\`}
    style={{ backdropFilter: "blur(15px)" }}
  />
</div>

/* CSS */
backdrop-filter: blur(15px);
transition: transform 0.7s;
transform: scale(0); /* when revealed */
transform-origin: center;`}
      >
        <div className="flex justify-center">
          <div className="relative p-6 rounded-lg shadow-lg overflow-hidden w-full max-w-md h-48">
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
      </DemoBlock>
    </div>
  );
}
