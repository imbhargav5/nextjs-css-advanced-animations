"use client";

export function PatternOverlaysDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Pattern Overlays</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Striped pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Striped Pattern</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px)",
                  backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Patterned Blur</p>
                <p className="text-sm text-gray-600">Stripes with blur</p>
              </div>
            </div>
          </div>

          {/* Example 2: Dotted pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Dotted Pattern</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Dotted Overlay</p>
                <p className="text-sm text-gray-600">Dots with blur</p>
              </div>
            </div>
          </div>

          {/* Example 3: Grid pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Grid Pattern</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px) saturate(1.3)",
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Grid Overlay</p>
                <p className="text-sm text-gray-600">Grid with blur</p>
              </div>
            </div>
          </div>

          {/* Example 4: Complex pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Complex Pattern</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(25px) brightness(0.9)",
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Complex Overlay</p>
                <p className="text-sm text-gray-600">Multiple patterns</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(15px);
background-image: repeating-linear-gradient(...);
/* Combining backdrop-filter with CSS patterns */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

