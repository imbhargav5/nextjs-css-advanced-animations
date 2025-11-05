"use client";

export function ResponsivePolygonDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Responsive Polygon</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Viewport-based */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Viewport Units</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-blue-500"
                style={{
                  clipPath: "polygon(calc(50vw - 100px) 0%, calc(50vw + 100px) 0%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Calc-based */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Calc Function</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-pink-400 to-rose-500"
                style={{
                  clipPath: "polygon(calc(50% - 80px) 0%, calc(50% + 80px) 0%, calc(50% + 120px) 100%, calc(50% - 120px) 100%)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Percentage with calc */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Percentage + Calc</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
                style={{
                  clipPath: "polygon(0% 0%, calc(30% + 20px) 0%, calc(70% - 20px) 100%, 0% 100%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Responsive circle */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Responsive Circle</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-amber-500"
                style={{
                  clipPath: "circle(calc(30% + 10vw) at 50% 50%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: polygon(calc(50% - 80px) 0%, calc(50% + 80px) 0%, 100% 100%, 0% 100%);
/* Use calc() for responsive clip-paths */
/* Combine percentages, fixed units, and viewport units */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

