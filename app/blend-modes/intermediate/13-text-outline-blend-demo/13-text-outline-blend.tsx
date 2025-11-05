"use client";

export function TextOutlineBlendDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Text Outline Blend</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Text with multiply outline */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiply Outline</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <h2
                  className="text-4xl font-bold text-transparent"
                  style={{
                    WebkitTextStroke: "2px yellow",
                    mixBlendMode: "multiply",
                    color: "transparent",
                  }}
                >
                  OUTLINE
                </h2>
              </div>
            </div>
          </div>

          {/* Example 2: Text with screen outline */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Screen Outline</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <h2
                  className="text-4xl font-bold text-transparent"
                  style={{
                    WebkitTextStroke: "2px pink",
                    mixBlendMode: "screen",
                    color: "transparent",
                  }}
                >
                  BLEND
                </h2>
              </div>
            </div>
          </div>

          {/* Example 3: Text with difference outline */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Difference Outline</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center">
                <h2
                  className="text-4xl font-bold text-transparent"
                  style={{
                    WebkitTextStroke: "2px red",
                    mixBlendMode: "difference",
                    color: "transparent",
                  }}
                >
                  TEXT
                </h2>
              </div>
            </div>
          </div>

          {/* Example 4: Text with overlay outline */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Overlay Outline</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center">
                <h2
                  className="text-4xl font-bold text-transparent"
                  style={{
                    WebkitTextStroke: "2px yellow",
                    mixBlendMode: "overlay",
                    color: "transparent",
                  }}
                >
                  EFFECT
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`h2 {
  color: transparent;
  -webkit-text-stroke: 2px yellow;
  mix-blend-mode: multiply;
}

/* Text outline blends with background */
/* Creates unique outline effects */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

