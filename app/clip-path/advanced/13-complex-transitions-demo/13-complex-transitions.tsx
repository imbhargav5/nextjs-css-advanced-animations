"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoBlock } from "@/components/demo-block";

export function ComplexTransitionsDemo() {
  const [step, setStep] = useState(0);

  const transitions = [
    "polygon(50% 0%, 0% 100%, 100% 100%)",
    "polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)",
    "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    "circle(50% at 50% 50%)",
    "polygon(50% 0%, 0% 100%, 100% 100%)",
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Complex Transition Sequences</h2>

      <div className="flex justify-center mb-8">
        <Button onClick={() => setStep((s) => (s + 1) % transitions.length)}>
          Next Step ({step + 1}/{transitions.length})
        </Button>
      </div>

      <DemoBlock
        title="Sequential Transition"
        code={`const transitions = [
  "polygon(50% 0%, 0% 100%, 100% 100%)",
  "polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)",
  "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  "circle(50% at 50% 50%)"
];

<div
  className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-1000"
  style={{ clipPath: transitions[step] }}
/>`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-1000 ease-in-out"
          style={{
            clipPath: transitions[step],
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Delayed Transition"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-1000"
  style={{
    clipPath: transitions[(step + 1) % transitions.length],
    transitionDelay: "200ms"
  }}
/>

/* Transitions with delay */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-1000 ease-in-out"
          style={{
            clipPath: transitions[(step + 1) % transitions.length],
            transitionDelay: "200ms",
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Staggered Transition"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-1000"
  style={{
    clipPath: transitions[(step + 2) % transitions.length],
    transitionDelay: "400ms"
  }}
/>

/* Longer delay for staggered effect */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-1000 ease-in-out"
          style={{
            clipPath: transitions[(step + 2) % transitions.length],
            transitionDelay: "400ms",
          }}
        />
      </DemoBlock>

      <DemoBlock
        title="Reverse Transition"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-1000"
  style={{ clipPath: transitions[transitions.length - 1 - step] }}
/>

/* Transitions in reverse order */`}
      >
        <div
          className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-1000 ease-in-out"
          style={{
            clipPath: transitions[transitions.length - 1 - step],
          }}
        />
      </DemoBlock>
    </div>
  );
}

