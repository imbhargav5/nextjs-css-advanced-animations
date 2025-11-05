"use client";

export function SvgPathClipDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-sky-50 to-cyan-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">SVG Path Clip</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Custom SVG path */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Custom SVG Path</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
                style={{
                  clipPath: "path('M 0,100 Q 50,0 100,100 T 200,100')",
                }}
              />
            </div>
          </div>

          {/* Example 2: Wave pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Wave Pattern</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
                style={{
                  clipPath: "path('M 0,50 Q 50,0 100,50 T 200,50 T 300,50 L 300,100 L 0,100 Z')",
                }}
              />
            </div>
          </div>

          {/* Example 3: Heart shape */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Heart Shape</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
                style={{
                  clipPath: "path('M 50,20 C 30,10 10,20 10,40 C 10,55 25,65 50,85 C 75,65 90,55 90,40 C 90,20 70,10 50,20 Z')",
                }}
              />
            </div>
          </div>

          {/* Example 4: Curved shape */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Curved Shape</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
                style={{
                  clipPath: "path('M 0,0 Q 50,50 100,0 T 200,0 T 300,0 L 300,100 L 0,100 Z')",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: path('M 0,100 Q 50,0 100,100 T 200,100');
/* SVG path syntax */
/* M = Move to, Q = Quadratic curve, T = Smooth curve */
/* Use url() for external SVG references */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

