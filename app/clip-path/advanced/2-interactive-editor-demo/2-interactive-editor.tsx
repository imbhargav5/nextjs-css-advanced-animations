"use client";

import { useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function InteractiveEditorDemo() {
  const [clipType, setClipType] = useState<"circle" | "polygon" | "ellipse" | "inset">("circle");
  const [circleRadius, setCircleRadius] = useState(40);
  const [circleX, setCircleX] = useState(50);
  const [circleY, setCircleY] = useState(50);
  const [polygonPoints, setPolygonPoints] = useState("50% 0%, 0% 100%, 100% 100%");
  const [ellipseRX, setEllipseRX] = useState(40);
  const [ellipseRY, setEllipseRY] = useState(30);
  const [ellipseX, setEllipseX] = useState(50);
  const [ellipseY, setEllipseY] = useState(50);
  const [insetValue, setInsetValue] = useState(20);

  const getClipPath = () => {
    switch (clipType) {
      case "circle":
        return `circle(${circleRadius}% at ${circleX}% ${circleY}%)`;
      case "polygon":
        return `polygon(${polygonPoints})`;
      case "ellipse":
        return `ellipse(${ellipseRX}% ${ellipseRY}% at ${ellipseX}% ${ellipseY}%)`;
      case "inset":
        return `inset(${insetValue}%)`;
      default:
        return "circle(40% at 50% 50%)";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Interactive Clip-Path Editor</h2>

      <DemoBlock
        title="Interactive Editor"
        code={`const [clipType, setClipType] = useState("circle");
const [circleRadius, setCircleRadius] = useState(40);
const [circleX, setCircleX] = useState(50);
const [circleY, setCircleY] = useState(50);

const getClipPath = () => {
  switch (clipType) {
    case "circle":
      return \`circle(\${circleRadius}% at \${circleX}% \${circleY}%)\`;
    // ... other cases
  }
};

<div
  className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500"
  style={{ clipPath: getClipPath() }}
/>`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Clip Type</label>
              <select
                value={clipType}
                onChange={(e) => setClipType(e.target.value as any)}
                className="w-full p-2 border rounded"
              >
                <option value="circle">Circle</option>
                <option value="polygon">Polygon</option>
                <option value="ellipse">Ellipse</option>
                <option value="inset">Inset</option>
              </select>
            </div>

            {clipType === "circle" && (
              <>
                <div>
                  <label className="block text-sm font-semibold mb-2">Radius: {circleRadius}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={circleRadius}
                    onChange={(e) => setCircleRadius(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">X: {circleX}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={circleX}
                    onChange={(e) => setCircleX(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Y: {circleY}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={circleY}
                    onChange={(e) => setCircleY(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </>
            )}

            {clipType === "polygon" && (
              <div>
                <label className="block text-sm font-semibold mb-2">Points</label>
                <input
                  type="text"
                  value={polygonPoints}
                  onChange={(e) => setPolygonPoints(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="50% 0%, 0% 100%, 100% 100%"
                />
              </div>
            )}

            {clipType === "ellipse" && (
              <>
                <div>
                  <label className="block text-sm font-semibold mb-2">RX: {ellipseRX}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={ellipseRX}
                    onChange={(e) => setEllipseRX(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">RY: {ellipseRY}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={ellipseRY}
                    onChange={(e) => setEllipseRY(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">X: {ellipseX}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={ellipseX}
                    onChange={(e) => setEllipseX(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Y: {ellipseY}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={ellipseY}
                    onChange={(e) => setEllipseY(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </>
            )}

            {clipType === "inset" && (
              <div>
                <label className="block text-sm font-semibold mb-2">Inset: {insetValue}%</label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={insetValue}
                  onChange={(e) => setInsetValue(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            )}

            <div className="bg-muted p-4 rounded">
              <code className="text-sm break-all">{`clip-path: ${getClipPath()};`}</code>
            </div>
          </div>

          {/* Preview */}
          <div className="flex items-center">
            <div
              className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 transition-all duration-300"
              style={{
                clipPath: getClipPath(),
              }}
            />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

