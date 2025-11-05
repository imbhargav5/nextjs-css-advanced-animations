"use client";

export function SimpleBlurDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Simple Blur Backdrop Filter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Light blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Light Blur (5px)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-[5px]"
                style={{
                  backdropFilter: "blur(5px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Content behind blur</p>
                <p className="text-sm text-gray-600">Backdrop blur creates a frosted glass effect</p>
              </div>
            </div>
          </div>

          {/* Example 2: Medium blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Medium Blur (10px)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-[10px]"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">More blur applied</p>
                <p className="text-sm text-gray-600">Increased blur radius for stronger effect</p>
              </div>
            </div>
          </div>

          {/* Example 3: Strong blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Strong Blur (20px)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-[20px]"
                style={{
                  backdropFilter: "blur(20px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Heavy blur effect</p>
                <p className="text-sm text-gray-600">Strong blur for maximum glass effect</p>
              </div>
            </div>
          </div>

          {/* Example 4: Very strong blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Very Strong Blur (40px)</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-[40px]"
                style={{
                  backdropFilter: "blur(40px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Maximum blur</p>
                <p className="text-sm text-gray-600">Extreme blur for dramatic effect</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(10px);
/* Applies a blur effect to the background behind the element */
/* Works with semi-transparent backgrounds for glass effect */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

