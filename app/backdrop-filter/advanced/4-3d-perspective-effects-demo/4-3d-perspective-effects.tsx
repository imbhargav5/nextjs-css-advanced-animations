"use client";

export function Perspective3DEffectsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">3D Perspective Effects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: 3D transform with blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Rotated with Blur</h3>
            <div className="perspective-1000">
              <div className="relative p-6 rounded-lg shadow-lg transform rotate-y-12 transition-transform hover:rotate-y-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
                <div
                  className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                  style={{
                    backdropFilter: "blur(15px)",
                    transform: "rotateY(12deg)",
                  }}
                />
                <div className="relative z-10">
                  <p className="text-gray-800 font-semibold">3D Card</p>
                  <p className="text-sm text-gray-600">Blur with perspective</p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: Tilted panel */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Tilted Panel</h3>
            <div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30 transform rotate-x-6">
              <h4 className="text-xl font-bold mb-2 text-gray-900">3D Panel</h4>
              <p className="text-white/90">
                Perspective transform with backdrop filter
              </p>
            </div>
          </div>

          {/* Example 3: Layered 3D */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Layered 3D</h3>
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/25 rounded-lg transform rotate-x-3"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              />
              <div
                className="absolute inset-2 bg-white/35 rounded-lg transform rotate-x-6"
                style={{
                  backdropFilter: "blur(15px)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Complex 3D */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Complex 3D</h3>
            <div className="relative p-6 rounded-lg shadow-lg transform rotate-y-6 rotate-x-3">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(20px) brightness(0.9)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Advanced 3D</p>
                <p className="text-sm text-gray-600">Multiple transforms</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`transform: rotateY(12deg) rotateX(3deg);
backdrop-filter: blur(15px) brightness(0.9);
/* Combining 3D transforms with backdrop-filter */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

