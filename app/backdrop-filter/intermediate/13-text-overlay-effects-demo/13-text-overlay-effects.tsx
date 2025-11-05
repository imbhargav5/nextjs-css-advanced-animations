"use client";

export function TextOverlayEffectsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Text Overlay Effects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Text on blurred background */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Readable Text Overlay</h3>
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 h-40" />
              <div
                className="absolute inset-0 bg-black/20"
                style={{
                  backdropFilter: "blur(10px)",
                }}
              />
              <div className="relative z-10 p-6">
                <h4 className="text-2xl font-bold text-white mb-2">Title Text</h4>
                <p className="text-white/90">
                  Text remains readable over blurred background
                </p>
              </div>
            </div>
          </div>

          {/* Example 2: Strong blur for text */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Strong Blur for Text</h3>
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 h-40" />
              <div
                className="absolute inset-0 bg-black/30"
                style={{
                  backdropFilter: "blur(20px)",
                }}
              />
              <div className="relative z-10 p-6">
                <h4 className="text-2xl font-bold text-white mb-2">Headline</h4>
                <p className="text-white/90">
                  Heavy blur ensures text readability
                </p>
              </div>
            </div>
          </div>

          {/* Example 3: Text with brightness */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Text with Brightness</h3>
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 h-40" />
              <div
                className="absolute inset-0 bg-black/20"
                style={{
                  backdropFilter: "blur(8px) brightness(0.7)",
                }}
              />
              <div className="relative z-10 p-6">
                <h4 className="text-2xl font-bold text-white mb-2">Content</h4>
                <p className="text-white/90">
                  Darkened backdrop for contrast
                </p>
              </div>
            </div>
          </div>

          {/* Example 4: Premium text overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Premium Text Overlay</h3>
            <div className="relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 h-40" />
              <div
                className="absolute inset-0 bg-black/25"
                style={{
                  backdropFilter: "blur(15px) saturate(1.3) brightness(0.85)",
                }}
              />
              <div className="relative z-10 p-6">
                <h4 className="text-2xl font-bold text-white mb-2">Premium</h4>
                <p className="text-white/90">
                  Complex filter combination
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.text-overlay {
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.2);
}
/* Creates readable text over complex backgrounds */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

