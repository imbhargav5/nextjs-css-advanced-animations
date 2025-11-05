"use client";

export function ContrastDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Contrast Backdrop Filter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Low contrast */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Low Contrast (0.5)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "contrast(0.5)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Reduced contrast</p>
                <p className="text-sm text-gray-600">Makes background less distinct</p>
              </div>
            </div>
          </div>

          {/* Example 2: High contrast */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">High Contrast (1.5)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "contrast(1.5)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Increased contrast</p>
                <p className="text-sm text-gray-600">Makes background more vibrant</p>
              </div>
            </div>
          </div>

          {/* Example 3: Very low contrast */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Very Low Contrast (0.3)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "contrast(0.3)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Minimal contrast</p>
                <p className="text-sm text-gray-600">Background becomes very muted</p>
              </div>
            </div>
          </div>

          {/* Example 4: Maximum contrast */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Maximum Contrast (2.0)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "contrast(2.0)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Maximum contrast</p>
                <p className="text-sm text-gray-600">Doubles the contrast</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: contrast(1.5);
/* Values: 0-1 (reduced), 1 (normal), >1 (increased) */
/* Adjusts the contrast of the background behind the element */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

