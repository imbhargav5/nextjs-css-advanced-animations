"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function ShapeMorphingDemo() {
  const [morphState, setMorphState] = useState(0);

  const shapes = [
    "polygon(50% 0%, 0% 100%, 100% 100%)",
    "polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)",
    "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    "circle(50% at 50% 50%)",
  ];

  const currentShape = shapes[morphState];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Shape Morphing</h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {shapes.map((_, index) => (
          <Button
            key={index}
            onClick={() => setMorphState(index)}
            variant={morphState === index ? "secondary" : "outline"}
          >
            Shape {index + 1}
          </Button>
        ))}
      </div>

      <DemoBlock
        title="Morphing Shape"
        code={`const shapes = [
  "polygon(50% 0%, 0% 100%, 100% 100%)",
  "polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)",
  "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  "circle(50% at 50% 50%)"
];

<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-1000"
  style={{ clipPath: shapes[morphState] }}
/>`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-1000 ease-in-out"
          style={{
            clipPath: currentShape,
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="With Rotation"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-1000"
  style={{
    clipPath: currentShape,
    transform: \`rotate(\${morphState * 45}deg)\`
  }}
/>

/* Shape morphs while rotating */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-1000 ease-in-out"
          style={{
            clipPath: currentShape,
            transform: `rotate(${morphState * 45}deg)`,
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="With Scale"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-1000"
  style={{
    clipPath: currentShape,
    transform: \`scale(\${0.7 + morphState * 0.1})\`
  }}
/>

/* Shape morphs while scaling */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-1000 ease-in-out"
          style={{
            clipPath: currentShape,
            transform: `scale(${0.7 + morphState * 0.1})`,
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Combined Transforms"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-1000"
  style={{
    clipPath: currentShape,
    transform: \`rotate(\${morphState * 30}deg) scale(\${0.8 + morphState * 0.05})\`
  }}
/>

/* Shape morphs with rotation and scale */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-1000 ease-in-out"
          style={{
            clipPath: currentShape,
            transform: `rotate(${morphState * 30}deg) scale(${0.8 + morphState * 0.05})`,
          }}
        />
      </DemoBlock>
    </div>
  );
}

