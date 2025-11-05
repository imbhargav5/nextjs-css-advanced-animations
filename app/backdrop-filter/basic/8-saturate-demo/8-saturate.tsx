"use client";

export function SaturateDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Saturate Backdrop Filter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Desaturated */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Desaturated (0.5)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "saturate(0.5)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">50% saturation</p>
                <p className="text-sm text-gray-600">Reduced color intensity</p>
              </div>
            </div>
          </div>

          {/* Example 2: Oversaturated */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Oversaturated (1.5)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "saturate(1.5)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">150% saturation</p>
                <p className="text-sm text-gray-600">Increased color intensity</p>
              </div>
            </div>
          </div>

          {/* Example 3: Very desaturated */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Very Desaturated (0.2)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "saturate(0.2)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">20% saturation</p>
                <p className="text-sm text-gray-600">Nearly grayscale</p>
              </div>
            </div>
          </div>

          {/* Example 4: Maximum saturation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Maximum Saturation (2.0)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "saturate(2.0)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">200% saturation</p>
                <p className="text-sm text-gray-600">Maximum color intensity</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: saturate(1.5);
/* Values: 0 (grayscale) to infinity (vibrant) */
/* Adjusts the color saturation of the background */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

