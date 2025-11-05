"use client";

export function MultipleCirclesDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Multiple Circles Clip</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Two circles */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Two Circles</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500"
                  style={{
                    clipPath: "circle(30% at 30% 50%)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500"
                  style={{
                    clipPath: "circle(30% at 70% 50%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Three circles */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Three Circles</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500"
                  style={{
                    clipPath: "circle(25% at 25% 50%)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500"
                  style={{
                    clipPath: "circle(25% at 50% 50%)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500"
                  style={{
                    clipPath: "circle(25% at 75% 50%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Overlapping circles */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Overlapping Circles</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
                  style={{
                    clipPath: "circle(40% at 40% 50%)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500"
                  style={{
                    clipPath: "circle(40% at 60% 50%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Grid pattern */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Circle Grid</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
                  style={{
                    clipPath: "circle(20% at 25% 25%)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
                  style={{
                    clipPath: "circle(20% at 75% 25%)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
                  style={{
                    clipPath: "circle(20% at 25% 75%)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500"
                  style={{
                    clipPath: "circle(20% at 75% 75%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: circle(30% at 30% 50%), circle(30% at 70% 50%);
/* Multiple clip-paths create a union */
/* Separate each shape with a comma */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

