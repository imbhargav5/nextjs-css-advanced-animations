"use client";

export function MultipleFiltersDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Multiple Backdrop Filters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Blur + Brightness */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur + Brightness</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "blur(10px) brightness(0.8)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Blurred & Darkened</p>
                <p className="text-sm text-gray-600">Combines blur and brightness</p>
              </div>
            </div>
          </div>

          {/* Example 2: Blur + Saturate */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur + Saturate</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "blur(8px) saturate(1.5)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Blurred & Vibrant</p>
                <p className="text-sm text-gray-600">Combines blur and saturation</p>
              </div>
            </div>
          </div>

          {/* Example 3: Blur + Contrast + Brightness */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur + Contrast + Brightness</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "blur(12px) contrast(1.2) brightness(0.9)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Triple Effect</p>
                <p className="text-sm text-gray-600">Blur, contrast, and brightness</p>
              </div>
            </div>
          </div>

          {/* Example 4: Grayscale + Blur + Brightness */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Grayscale + Blur + Brightness</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "grayscale(0.7) blur(10px) brightness(0.85)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Complex Combination</p>
                <p className="text-sm text-gray-600">Multiple filters working together</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(10px) brightness(0.8);
/* Multiple filters can be combined */
/* Filters are applied in order from left to right */
/* Separate each filter with a space */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

