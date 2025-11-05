"use client";

export function BackgroundBlendModeDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Background Blend Mode</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Background multiply */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Background Multiply</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500"
                style={{
                  backgroundBlendMode: "multiply",
                  backgroundImage: "linear-gradient(to bottom right, yellow, red), linear-gradient(to bottom right, blue, purple)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Background screen */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Background Screen</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-indigo-600 to-purple-600"
                style={{
                  backgroundBlendMode: "screen",
                  backgroundImage: "linear-gradient(to top right, pink, orange), linear-gradient(to bottom right, indigo, purple)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Background overlay */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Background Overlay</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-teal-400"
                style={{
                  backgroundBlendMode: "overlay",
                  backgroundImage: "linear-gradient(to bottom right, red, yellow), linear-gradient(to bottom right, green, teal)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Background hard light */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Background Hard Light</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-400"
                style={{
                  backgroundBlendMode: "hard-light",
                  backgroundImage: "linear-gradient(to bottom right, pink, cyan), linear-gradient(to bottom right, blue, indigo)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`background-image: 
  linear-gradient(...),
  linear-gradient(...);
background-blend-mode: multiply;

/* Blends multiple background layers */
/* Different from mix-blend-mode */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

