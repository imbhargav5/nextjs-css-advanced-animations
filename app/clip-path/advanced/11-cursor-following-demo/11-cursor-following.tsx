"use client";

import { useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function CursorFollowingDemo() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Clip-Path Following Cursor</h2>

      <DemoBlock
        title="Circle Following"
        code={`const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

<div
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  }}
>
  <div
    className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
    style={{ clipPath: \`circle(25% at \${mousePos.x}% \${mousePos.y}%)\` }}
  />
</div>`}
      >
        <div
          className="cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100,
            });
          }}
        >
          <div
            className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-200"
            style={{
              clipPath: `circle(25% at ${mousePos.x}% ${mousePos.y}%)`,
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Ellipse Following"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
  style={{ clipPath: \`ellipse(30% 20% at \${mousePos.x}% \${mousePos.y}%)\` }}
/>

/* Ellipse follows cursor position */`}
      >
        <div
          className="cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100,
            });
          }}
        >
          <div
            className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-200"
            style={{
              clipPath: `ellipse(30% 20% at ${mousePos.x}% ${mousePos.y}%)`,
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Polygon Following"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500"
  style={{
    clipPath: \`polygon(\${mousePos.x}% \${mousePos.y}%, \${mousePos.x + 10}% \${mousePos.y + 20}%, \${mousePos.x - 10}% \${mousePos.y + 20}%)\`
  }}
/>

/* Triangle follows cursor */`}
      >
        <div
          className="cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100,
            });
          }}
        >
          <div
            className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-200"
            style={{
              clipPath: `polygon(${mousePos.x}% ${mousePos.y}%, ${mousePos.x + 10}% ${mousePos.y + 20}%, ${mousePos.x - 10}% ${mousePos.y + 20}%)`,
            }}
          />
        </div>
      </DemoBlock>

      <DemoBlock
        title="Inset Following"
        code={`<div
  className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500"
  style={{
    clipPath: \`inset(\${Math.max(0, mousePos.y - 20)}% \${Math.max(0, 100 - mousePos.x - 20)}% \${Math.max(0, 100 - mousePos.y - 20)}% \${Math.max(0, mousePos.x - 20)}%)\`
  }}
/>

/* Inset window follows cursor */`}
      >
        <div
          className="cursor-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100,
            });
          }}
        >
          <div
            className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-200"
            style={{
              clipPath: `inset(${Math.max(0, mousePos.y - 20)}% ${Math.max(0, 100 - mousePos.x - 20)}% ${Math.max(0, 100 - mousePos.y - 20)}% ${Math.max(0, mousePos.x - 20)}%)`,
            }}
          />
        </div>
      </DemoBlock>
    </div>
  );
}

