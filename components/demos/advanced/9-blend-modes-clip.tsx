"use client";

export function BlendModesClipDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Modes with Clip-Path</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Multiply blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiply Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500" />
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 mix-blend-multiply"
                style={{
                  clipPath: "circle(50% at 50% 50%)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 2: Screen blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Screen Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
              <div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 mix-blend-screen"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 3: Overlay blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Overlay Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500" />
              <div
                className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500 mix-blend-overlay"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 4: Difference blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Difference Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500" />
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 mix-blend-difference"
                style={{
                  clipPath: "inset(10% round 20px)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: circle(50% at 50% 50%);
mix-blend-mode: multiply;
/* Clip-path works with CSS blend modes */
/* Creates interesting color interactions */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

