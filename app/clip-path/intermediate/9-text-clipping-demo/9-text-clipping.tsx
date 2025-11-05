"use client";

export function TextClippingDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Text Clipping</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Circle text clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Text Clip</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-6xl font-bold text-white"
                style={{
                  clipPath: "circle(40% at 50% 50%)",
                }}
              >
                CLIP
              </div>
            </div>
          </div>

          {/* Example 2: Polygon text clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Polygon Text Clip</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-6xl font-bold text-white"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              >
                PATH
              </div>
            </div>
          </div>

          {/* Example 3: Star text clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Star Text Clip</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-5xl font-bold text-white"
                style={{
                  clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              >
                STAR
              </div>
            </div>
          </div>

          {/* Example 4: Hexagon text clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hexagon Text Clip</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-5xl font-bold text-white"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                }}
              >
                HEX
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`div {
  clip-path: circle(40% at 50% 50%);
  background: gradient(...);
}
/* Text is clipped along with the background */
/* Use large text for best effect */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

