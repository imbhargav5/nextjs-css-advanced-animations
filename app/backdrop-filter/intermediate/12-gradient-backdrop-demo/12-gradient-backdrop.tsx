"use client";

export function GradientBackdropDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Gradient Backdrop</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Blur on gradient */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur on Gradient</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Gradient Background</p>
                <p className="text-sm text-gray-600">Blur applied to gradient</p>
              </div>
            </div>
          </div>

          {/* Example 2: Brightness on gradient */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Brightness on Gradient</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "brightness(0.7)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Darkened Gradient</p>
                <p className="text-sm text-gray-600">Brightness filter on gradient</p>
              </div>
            </div>
          </div>

          {/* Example 3: Saturate on gradient */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Saturate on Gradient</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "saturate(2.0)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Enhanced Gradient</p>
                <p className="text-sm text-gray-600">Increased saturation</p>
              </div>
            </div>
          </div>

          {/* Example 4: Complex on gradient */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Complex Filter on Gradient</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "blur(12px) saturate(1.5) brightness(1.1)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Rich Gradient</p>
                <p className="text-sm text-gray-600">Multiple filters combined</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`background: linear-gradient(...);
backdrop-filter: blur(15px) saturate(1.5);
/* Backdrop filters work on gradient backgrounds */
/* Creates rich visual effects */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

