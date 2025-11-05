"use client";

export function FilterCombinationsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Filter Combinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Blur filter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Blur + Clip</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500 transition-all duration-300"
                style={{
                  clipPath: "circle(50% at 50% 50%)",
                  filter: "blur(4px)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Brightness filter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Brightness + Clip</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500 transition-all duration-300"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  filter: "brightness(1.5)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Contrast filter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contrast + Clip</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-500 transition-all duration-300"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                  filter: "contrast(1.5)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Multiple filters */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple Filters</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500 transition-all duration-300"
                style={{
                  clipPath: "inset(10% round 20px)",
                  filter: "blur(2px) brightness(1.2) contrast(1.3) saturate(1.5)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: circle(50% at 50% 50%);
filter: blur(4px) brightness(1.2) contrast(1.3);
/* Clip-path applies first, then filters */
/* Filters affect the clipped element */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

