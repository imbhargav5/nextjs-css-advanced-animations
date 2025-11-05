"use client";

export function OpacityDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Opacity Backdrop Filter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Light opacity */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Light Opacity (0.3)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "opacity(0.3)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">30% opacity</p>
                <p className="text-sm text-gray-600">Background mostly visible</p>
              </div>
            </div>
          </div>

          {/* Example 2: Medium opacity */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Medium Opacity (0.6)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "opacity(0.6)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">60% opacity</p>
                <p className="text-sm text-gray-600">Balanced visibility</p>
              </div>
            </div>
          </div>

          {/* Example 3: High opacity */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">High Opacity (0.8)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "opacity(0.8)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">80% opacity</p>
                <p className="text-sm text-gray-600">Background less visible</p>
              </div>
            </div>
          </div>

          {/* Example 4: Full opacity */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Full Opacity (1.0)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "opacity(1.0)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">100% opacity</p>
                <p className="text-sm text-gray-600">Background fully opaque</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: opacity(0.6);
/* Values: 0 (transparent) to 1 (opaque) */
/* Adjusts the opacity of the background */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

