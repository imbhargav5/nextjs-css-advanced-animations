"use client";

export function HueRotateDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Hue Rotate Backdrop Filter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Small rotation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Small Rotation (90deg)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "hue-rotate(90deg)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">90° rotation</p>
                <p className="text-sm text-gray-600">Shifts colors on color wheel</p>
              </div>
            </div>
          </div>

          {/* Example 2: Medium rotation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Medium Rotation (180deg)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "hue-rotate(180deg)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">180° rotation</p>
                <p className="text-sm text-gray-600">Opposite colors on wheel</p>
              </div>
            </div>
          </div>

          {/* Example 3: Large rotation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Large Rotation (270deg)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "hue-rotate(270deg)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">270° rotation</p>
                <p className="text-sm text-gray-600">Three-quarter turn</p>
              </div>
            </div>
          </div>

          {/* Example 4: Full rotation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Full Rotation (360deg)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "hue-rotate(360deg)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">360° rotation</p>
                <p className="text-sm text-gray-600">Full circle (back to original)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: hue-rotate(90deg);
/* Values: 0deg to 360deg */
/* Rotates the hue of colors in the background */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

