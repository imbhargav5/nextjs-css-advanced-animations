"use client";

export function GradientClipDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Gradient with Clip-Path</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Circle gradient */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Gradient</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-radial from-purple-400 via-pink-500 to-transparent"
                style={{
                  clipPath: "circle(50% at 50% 50%)",
                  background: "radial-gradient(circle, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 50%, transparent 100%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Polygon gradient */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Polygon Gradient</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  background: "linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(147, 51, 234) 100%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Multiple gradients */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple Gradients</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  background: "linear-gradient(135deg, rgb(34, 197, 94) 0%, rgb(20, 184, 166) 100%)",
                  opacity: 0.7,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                  background: "linear-gradient(225deg, rgb(59, 130, 246) 0%, rgb(147, 51, 234) 100%)",
                  opacity: 0.7,
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 4: Gradient inset */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Gradient Inset</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64"
                style={{
                  clipPath: "inset(10% round 20px)",
                  background: "linear-gradient(45deg, rgb(251, 146, 60) 0%, rgb(239, 68, 68) 50%, rgb(168, 85, 247) 100%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: circle(50% at 50% 50%);
background: radial-gradient(circle, purple 0%, pink 50%, transparent 100%);
/* Clip-path works with any background */
/* Combine gradients with shapes */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

