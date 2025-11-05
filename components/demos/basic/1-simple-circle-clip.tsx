"use client";

export function SimpleCircleClipDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Simple Circle Clip</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Image with circle clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Clip on Image</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                alt="Mountain"
                className="w-full h-64 object-cover"
                style={{
                  clipPath: "circle(50% at 50% 50%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Div with circle clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Clip on Div</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-pink-500 to-violet-500"
                style={{
                  clipPath: "circle(40% at center)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Different circle sizes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Small Circle (30%)</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{
                  clipPath: "circle(30% at 50% 50%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Off-center circle */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Off-Center Circle</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
                style={{
                  clipPath: "circle(35% at 70% 30%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: circle(50% at 50% 50%);
/* Syntax: circle(radius at x y) */
/* radius: percentage or length */
/* x, y: center position */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

