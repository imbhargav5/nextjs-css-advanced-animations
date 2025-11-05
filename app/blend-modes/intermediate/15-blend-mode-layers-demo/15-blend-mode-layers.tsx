"use client";

export function BlendModeLayersDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode Layers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Three layer stack */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Three Layer Stack</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
                  style={{ mixBlendMode: "multiply" }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
                  style={{ mixBlendMode: "screen" }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-bl from-cyan-400 to-blue-400"
                  style={{ mixBlendMode: "overlay" }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Different blend modes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Different Blend Modes</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
                  style={{ mixBlendMode: "overlay" }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400"
                  style={{ mixBlendMode: "difference" }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-bl from-yellow-400 to-green-400"
                  style={{ mixBlendMode: "hard-light" }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Layered shapes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Layered Shapes</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute top-0 left-0 w-32 h-32 rounded-full bg-red-500"
                  style={{ mixBlendMode: "multiply" }}
                />
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full bg-yellow-500"
                  style={{ mixBlendMode: "screen" }}
                />
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-blue-500"
                  style={{ mixBlendMode: "overlay" }}
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-pink-500"
                  style={{ mixBlendMode: "difference" }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex layers */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Layers</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute top-4 left-4 w-40 h-32 bg-pink-500 opacity-80"
                  style={{ mixBlendMode: "hard-light" }}
                />
                <div
                  className="absolute bottom-4 right-4 w-40 h-32 bg-cyan-500 opacity-80"
                  style={{ mixBlendMode: "color-dodge" }}
                />
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-full"
                  style={{ mixBlendMode: "difference" }}
                />
                <div
                  className="absolute top-8 right-8 w-24 h-24 bg-purple-500 rounded-full"
                  style={{ mixBlendMode: "exclusion" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`/* Base layer */
background: blue;

/* Layer 1 */
.layer1 {
  mix-blend-mode: multiply;
}

/* Layer 2 */
.layer2 {
  mix-blend-mode: screen;
}

/* Layer 3 */
.layer3 {
  mix-blend-mode: overlay;
}

/* Layers stack and blend sequentially */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

