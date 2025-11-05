"use client";

export function FilterCombinationsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Filter Combinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Blur + Brightness + Contrast */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur + Brightness + Contrast</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "blur(12px) brightness(0.9) contrast(1.2)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Triple Filter</p>
                <p className="text-sm text-gray-600">Blur, brightness, and contrast</p>
              </div>
            </div>
          </div>

          {/* Example 2: Blur + Saturate + Brightness */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur + Saturate + Brightness</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "blur(15px) saturate(1.5) brightness(1.1)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Vibrant Effect</p>
                <p className="text-sm text-gray-600">Enhanced colors and brightness</p>
              </div>
            </div>
          </div>

          {/* Example 3: Grayscale + Blur + Contrast */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Grayscale + Blur + Contrast</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "grayscale(0.7) blur(10px) contrast(1.3)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Monochrome</p>
                <p className="text-sm text-gray-600">Desaturated with contrast</p>
              </div>
            </div>
          </div>

          {/* Example 4: Complex combination */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Complex Combination</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "blur(18px) saturate(1.8) brightness(0.95) contrast(1.15)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Rich Effect</p>
                <p className="text-sm text-gray-600">Multiple filters combined</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(12px) brightness(0.9) contrast(1.2);
/* Multiple filters work together */
/* Each filter is applied sequentially */
/* Order matters for the final result */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

