"use client";

export function BlendModeWithSVGDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Blend Mode with SVG</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: SVG circle with blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">SVG Circle Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "multiply" }}>
                  <circle cx="50%" cy="50%" r="40%" fill="yellow" />
                </svg>
              </div>
            </div>
          </div>

          {/* Example 2: SVG path with blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">SVG Path Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }}>
                  <path d="M 50,50 L 200,50 L 125,150 Z" fill="pink" />
                </svg>
              </div>
            </div>
          </div>

          {/* Example 3: Multiple SVG shapes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple SVG Shapes</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "overlay" }}>
                  <circle cx="25%" cy="25%" r="15%" fill="red" />
                  <circle cx="75%" cy="75%" r="15%" fill="yellow" />
                  <rect x="35%" y="35%" width="30%" height="30%" fill="blue" />
                </svg>
              </div>
            </div>
          </div>

          {/* Example 4: SVG gradient blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">SVG Gradient Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "difference" }}>
                  <defs>
                    <linearGradient id="svgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="pink" />
                      <stop offset="100%" stopColor="cyan" />
                    </linearGradient>
                  </defs>
                  <circle cx="50%" cy="50%" r="40%" fill="url(#svgGradient)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`<div style={{ background: 'blue' }}>
  <svg style={{ mixBlendMode: 'multiply' }}>
    <circle cx="50%" cy="50%" r="40%" fill="yellow" />
  </svg>
</div>

/* SVG elements blend with backgrounds */
/* Great for complex shapes and paths */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

