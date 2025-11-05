"use client";

export function SVGPathBlendDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">SVG Path Blend</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Complex SVG path */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Complex SVG Path</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500">
                <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "multiply" }}>
                  <path d="M 50,50 Q 100,20 150,50 T 250,50 T 350,50" stroke="yellow" strokeWidth="20" fill="none" />
                  <path d="M 50,100 Q 100,70 150,100 T 250,100 T 350,100" stroke="red" strokeWidth="20" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* Example 2: SVG bezier curves */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Bezier Curves</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-400">
                <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }}>
                  <path d="M 50,150 Q 150,50 250,150 T 450,150" stroke="pink" strokeWidth="15" fill="none" />
                  <path d="M 50,100 C 100,50 200,150 250,100" stroke="orange" strokeWidth="15" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* Example 3: SVG shapes blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">SVG Shapes Blend</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-green-400 to-teal-400">
                <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "overlay" }}>
                  <circle cx="25%" cy="25%" r="15%" fill="red" />
                  <rect x="35%" y="35%" width="30%" height="30%" fill="yellow" />
                  <polygon points="50%,10% 80%,40% 20%,40%" fill="blue" />
                </svg>
              </div>
            </div>
          </div>

          {/* Example 4: Multiple SVG paths */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple SVG Paths</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400">
                <svg className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "difference" }}>
                  <path d="M 50,50 L 200,50 L 125,150 Z" fill="pink" />
                  <path d="M 150,50 L 300,50 L 225,150 Z" fill="cyan" />
                  <path d="M 100,100 L 250,100 L 175,200 Z" fill="yellow" />
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
    <path d="M 50,50 Q 100,20 150,50" 
          stroke="yellow" 
          strokeWidth="20" 
          fill="none" />
  </svg>
</div>

/* SVG paths blend beautifully */
/* Great for complex shapes and curves */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

