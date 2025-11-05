"use client";

export function EllipseClipDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Ellipse Clip</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Basic ellipse */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Basic Ellipse</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
                style={{
                  clipPath: "ellipse(50% 40% at 50% 50%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Wide ellipse */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Wide Ellipse</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-r from-blue-400 to-cyan-500"
                style={{
                  clipPath: "ellipse(60% 30% at 50% 50%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Tall ellipse */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tall Ellipse</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-b from-green-400 to-teal-500"
                style={{
                  clipPath: "ellipse(30% 60% at 50% 50%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Off-center ellipse */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Off-Center Ellipse</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500"
                style={{
                  clipPath: "ellipse(45% 35% at 25% 75%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: ellipse(50% 40% at 50% 50%);
/* Syntax: ellipse(rx ry at x y) */
/* rx: horizontal radius */
/* ry: vertical radius */
/* x, y: center position */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

