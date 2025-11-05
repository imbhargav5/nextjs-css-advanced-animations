"use client";

export function BackdropFilterWithBlendModesDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Backdrop Filter with Blend Modes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Blur with multiply */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur + Multiply</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px)",
                  mixBlendMode: "multiply",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Blur + Blend</p>
                <p className="text-sm text-gray-600">Combined effects</p>
              </div>
            </div>
          </div>

          {/* Example 2: Blur with overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur + Overlay</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(20px)",
                  mixBlendMode: "overlay",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Enhanced Blend</p>
                <p className="text-sm text-gray-600">Overlay blend mode</p>
              </div>
            </div>
          </div>

          {/* Example 3: Blur with screen */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur + Screen</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px) brightness(1.1)",
                  mixBlendMode: "screen",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Screen Blend</p>
                <p className="text-sm text-gray-600">Lightening effect</p>
              </div>
            </div>
          </div>

          {/* Example 4: Complex combination */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Complex Combination</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(25px) saturate(1.5)",
                  mixBlendMode: "soft-light",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Rich Effect</p>
                <p className="text-sm text-gray-600">Multiple techniques</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(15px);
mix-blend-mode: multiply;
/* Combining backdrop-filter with blend modes */
/* Creates unique visual effects */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

