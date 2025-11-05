"use client";

export function GlassMorphismCardDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Glass Morphism Card</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Basic glass card */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Basic Glass Card</h3>
            <div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/30">
              <h4 className="text-xl font-bold mb-2 text-gray-900">Glass Card</h4>
              <p className="text-white/90">
                Classic glassmorphism effect with blur and transparency
              </p>
            </div>
          </div>

          {/* Example 2: Glass card with border */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Glass Card with Border</h3>
            <div
              className="relative p-6 rounded-xl shadow-xl border-2 border-white/40"
              style={{
                backdropFilter: "blur(20px) saturate(180%)",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <h4 className="text-xl font-bold mb-2 text-gray-900">Enhanced Glass</h4>
              <p className="text-white/90">
                Added saturation for richer glass effect
              </p>
            </div>
          </div>

          {/* Example 3: Dark glass card */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Dark Glass Card</h3>
            <div
              className="relative p-6 rounded-xl shadow-xl border border-white/20"
              style={{
                backdropFilter: "blur(15px) brightness(0.7)",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <h4 className="text-xl font-bold mb-2 text-gray-900">Dark Glass</h4>
              <p className="text-white/80">
                Darker glass effect with reduced brightness
              </p>
            </div>
          </div>

          {/* Example 4: Premium glass card */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Premium Glass Card</h3>
            <div
              className="relative p-6 rounded-xl shadow-xl border border-white/30"
              style={{
                backdropFilter: "blur(25px) saturate(200%) brightness(1.1)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <h4 className="text-xl font-bold mb-2 text-gray-900">Premium Glass</h4>
              <p className="text-white/90">
                Complex combination for premium glass effect
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(20px) saturate(180%);
background-color: rgba(255, 255, 255, 0.15);
border: 1px solid rgba(255, 255, 255, 0.3);
/* Classic glassmorphism effect */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

