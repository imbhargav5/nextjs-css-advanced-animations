"use client";

export function ComplexMultiLayerBlurDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Complex Multi-Layer Blur</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Layered elements */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Layered Elements</h3>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300" />
              <div
                className="absolute inset-0 bg-white/20"
                style={{
                  backdropFilter: "blur(5px)",
                }}
              />
              <div
                className="absolute top-4 left-4 right-4 h-20 bg-white/30 rounded-lg"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              />
              <div
                className="absolute bottom-4 left-4 right-4 h-20 bg-white/40 rounded-lg"
                style={{
                  backdropFilter: "blur(15px)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Nested blurs */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Nested Blurs</h3>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300" />
              <div
                className="absolute inset-4 bg-white/25 rounded-lg"
                style={{
                  backdropFilter: "blur(8px)",
                }}
              />
              <div
                className="absolute inset-8 bg-white/35 rounded-lg"
                style={{
                  backdropFilter: "blur(12px)",
                }}
              />
              <div
                className="absolute inset-12 bg-white/45 rounded-lg"
                style={{
                  backdropFilter: "blur(18px)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Overlapping layers */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Overlapping Layers</h3>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300" />
              <div
                className="absolute top-0 left-0 w-1/2 h-full bg-white/20"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              />
              <div
                className="absolute top-0 right-0 w-1/2 h-full bg-white/30"
                style={{
                  backdropFilter: "blur(15px)",
                }}
              />
              <div
                className="absolute top-1/2 left-1/4 right-1/4 h-1/2 bg-white/40 rounded-lg"
                style={{
                  backdropFilter: "blur(20px)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Complex composition */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Complex Composition</h3>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300" />
              <div
                className="absolute inset-0 bg-white/15"
                style={{
                  backdropFilter: "blur(6px)",
                }}
              />
              <div
                className="absolute top-2 left-2 w-32 h-32 bg-white/25 rounded-lg"
                style={{
                  backdropFilter: "blur(12px)",
                }}
              />
              <div
                className="absolute bottom-2 right-2 w-32 h-32 bg-white/35 rounded-lg"
                style={{
                  backdropFilter: "blur(18px)",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/45 rounded-lg"
                style={{
                  backdropFilter: "blur(25px)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`/* Multiple layers with different blur values */
.layer1 { backdrop-filter: blur(5px); }
.layer2 { backdrop-filter: blur(10px); }
.layer3 { backdrop-filter: blur(15px); }
/* Creates depth through layered blur */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

