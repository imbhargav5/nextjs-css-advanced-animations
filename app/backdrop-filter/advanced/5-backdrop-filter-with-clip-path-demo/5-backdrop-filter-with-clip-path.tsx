"use client";

export function BackdropFilterWithClipPathDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Backdrop Filter with Clip-Path</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Circle clip with blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Circular Clip</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px)",
                  clipPath: "circle(40% at 50% 50%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Clipped Blur</p>
                <p className="text-sm text-gray-600">Circle shape with blur</p>
              </div>
            </div>
          </div>

          {/* Example 2: Polygon clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Polygon Clip</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(20px)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Diamond Shape</p>
                <p className="text-sm text-gray-600">Polygon with blur</p>
              </div>
            </div>
          </div>

          {/* Example 3: Inset clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Inset Clip</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px) saturate(1.5)",
                  clipPath: "inset(20% 20% 20% 20% round 20px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Rounded Inset</p>
                <p className="text-sm text-gray-600">Clipped rounded rectangle</p>
              </div>
            </div>
          </div>

          {/* Example 4: Complex clip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Complex Clip</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(25px) brightness(0.9)",
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Octagon</p>
                <p className="text-sm text-gray-600">Complex polygon shape</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(15px);
clip-path: circle(40% at 50% 50%);
/* Combining backdrop-filter with clip-path */
/* Creates shaped blur effects */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

