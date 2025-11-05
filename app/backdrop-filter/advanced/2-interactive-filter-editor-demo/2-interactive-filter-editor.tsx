"use client";

import { useState } from "react";
import { DemoBlock } from "@/components/demo-block";

export function InteractiveFilterEditorDemo() {
  const [blur, setBlur] = useState(10);
  const [brightness, setBrightness] = useState(1.0);
  const [contrast, setContrast] = useState(1.0);
  const [saturate, setSaturate] = useState(1.0);
  const [grayscale, setGrayscale] = useState(0);
  const [sepia, setSepia] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [invert, setInvert] = useState(0);
  const [opacity, setOpacity] = useState(1.0);

  const filterString = `blur(${blur}px) brightness(${brightness}) contrast(${contrast}) saturate(${saturate}) grayscale(${grayscale}) sepia(${sepia}) hue-rotate(${hueRotate}deg) invert(${invert}) opacity(${opacity})`;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-8">Interactive Filter Editor</h2>

      <DemoBlock
        title="Real-Time Backdrop Filter Editor"
        code={`const [blur, setBlur] = useState(10);
const [brightness, setBrightness] = useState(1.0);
const [contrast, setContrast] = useState(1.0);
const [saturate, setSaturate] = useState(1.0);
const [grayscale, setGrayscale] = useState(0);
const [sepia, setSepia] = useState(0);
const [hueRotate, setHueRotate] = useState(0);
const [invert, setInvert] = useState(0);
const [opacity, setOpacity] = useState(1.0);

const filterString = \`blur(\${blur}px) brightness(\${brightness}) contrast(\${contrast}) saturate(\${saturate}) grayscale(\${grayscale}) sepia(\${sepia}) hue-rotate(\${hueRotate}deg) invert(\${invert}) opacity(\${opacity})\`;

<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />
  <div
    className="absolute inset-0 bg-white/30 transition-all duration-300"
    style={{ backdropFilter: filterString }}
  />
</div>

/* CSS */
backdrop-filter: blur(10px) brightness(1) contrast(1) saturate(1)
                 grayscale(0) sepia(0) hue-rotate(0deg)
                 invert(0) opacity(1);`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-xl shadow-lg space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Filter Controls</h3>

            <div className="space-y-3">
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Blur: {blur}px</label>
                <input type="range" min="0" max="30" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Brightness: {brightness.toFixed(1)}</label>
                <input type="range" min="0" max="2" step="0.1" value={brightness} onChange={(e) => setBrightness(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Contrast: {contrast.toFixed(1)}</label>
                <input type="range" min="0" max="2" step="0.1" value={contrast} onChange={(e) => setContrast(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Saturate: {saturate.toFixed(1)}</label>
                <input type="range" min="0" max="3" step="0.1" value={saturate} onChange={(e) => setSaturate(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Grayscale: {grayscale.toFixed(1)}</label>
                <input type="range" min="0" max="1" step="0.1" value={grayscale} onChange={(e) => setGrayscale(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Sepia: {sepia.toFixed(1)}</label>
                <input type="range" min="0" max="1" step="0.1" value={sepia} onChange={(e) => setSepia(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Hue Rotate: {hueRotate}deg</label>
                <input type="range" min="0" max="360" value={hueRotate} onChange={(e) => setHueRotate(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Invert: {invert.toFixed(1)}</label>
                <input type="range" min="0" max="1" step="0.1" value={invert} onChange={(e) => setInvert(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1 text-sm font-medium">Opacity: {opacity.toFixed(1)}</label>
                <input type="range" min="0" max="1" step="0.1" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Live Preview</h3>
            <div className="relative p-6 rounded-lg shadow-lg h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
                style={{
                  backdropFilter: filterString,
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Live Preview</p>
                <p className="text-sm text-gray-600">Adjust controls to see changes</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold mb-2 text-gray-900">Generated CSS:</h4>
              <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
                <code>{`backdrop-filter: ${filterString};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}

