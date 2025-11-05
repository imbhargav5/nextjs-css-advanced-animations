"use client";

export function TextBlendModesDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Text Blend Modes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Text with multiply */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiply Text</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <h2
                  className="text-4xl font-bold text-yellow-400"
                  style={{ mixBlendMode: "multiply" }}
                >
                  BLEND
                </h2>
              </div>
            </div>
          </div>

          {/* Example 2: Text with screen */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Screen Text</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <h2
                  className="text-4xl font-bold text-pink-400"
                  style={{ mixBlendMode: "screen" }}
                >
                  MODES
                </h2>
              </div>
            </div>
          </div>

          {/* Example 3: Text with difference */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Difference Text</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                <h2
                  className="text-4xl font-bold text-red-500"
                  style={{ mixBlendMode: "difference" }}
                >
                  CSS
                </h2>
              </div>
            </div>
          </div>

          {/* Example 4: Text with overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Overlay Text</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                <h2
                  className="text-4xl font-bold text-yellow-400"
                  style={{ mixBlendMode: "overlay" }}
                >
                  TEXT
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`h2 {
  mix-blend-mode: multiply;
  color: yellow;
}

/* Text blends with background */
/* Creates interesting color interactions */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

