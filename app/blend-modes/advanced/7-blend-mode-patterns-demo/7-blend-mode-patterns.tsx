"use client";

export function BlendModePatternsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode Patterns</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Striped pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Striped Pattern</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <div
                  className="absolute inset-0"
                  style={{
                    mixBlendMode: "multiply",
                    backgroundImage: "repeating-linear-gradient(45deg, yellow, yellow 10px, red 10px, red 20px)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Checkerboard pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Checkerboard Pattern</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <div
                  className="absolute inset-0"
                  style={{
                    mixBlendMode: "screen",
                    backgroundImage: "repeating-linear-gradient(0deg, pink 0px, pink 20px, orange 20px, orange 40px), repeating-linear-gradient(90deg, pink 0px, pink 20px, orange 20px, orange 40px)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Dot pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Dot Pattern</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <div
                  className="absolute inset-0"
                  style={{
                    mixBlendMode: "overlay",
                    backgroundImage: "radial-gradient(circle, red 2px, transparent 2px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Complex pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex Pattern</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <div
                  className="absolute inset-0"
                  style={{
                    mixBlendMode: "difference",
                    backgroundImage: "repeating-linear-gradient(30deg, yellow 0px, yellow 15px, transparent 15px, transparent 30px), repeating-linear-gradient(60deg, cyan 0px, cyan 15px, transparent 15px, transparent 30px)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.pattern-blend {
  mix-blend-mode: multiply;
  background-image: repeating-linear-gradient(
    45deg,
    yellow,
    yellow 10px,
    red 10px,
    red 20px
  );
}

/* Patterns blend beautifully with backgrounds */
/* Creates texture and visual interest */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

