"use client";

export function InvertDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Invert Backdrop Filter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Partial invert */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Partial Invert (0.5)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "invert(0.5)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">50% inverted</p>
                <p className="text-sm text-gray-600">Partially inverted colors</p>
              </div>
            </div>
          </div>

          {/* Example 2: Full invert */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Full Invert (1.0)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "invert(1.0)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">100% inverted</p>
                <p className="text-sm text-gray-600">Completely inverted colors</p>
              </div>
            </div>
          </div>

          {/* Example 3: Light invert */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Light Invert (0.3)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "invert(0.3)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Subtle invert</p>
                <p className="text-sm text-gray-600">Slight color inversion</p>
              </div>
            </div>
          </div>

          {/* Example 4: Strong invert */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Strong Invert (0.8)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/50 rounded-lg"
                style={{
                  backdropFilter: "invert(0.8)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Heavy invert</p>
                <p className="text-sm text-gray-600">Mostly inverted colors</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: invert(1.0);
/* Values: 0 (no effect) to 1 (fully inverted) */
/* Inverts the colors of the background */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

