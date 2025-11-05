"use client";

export function HoverRevealAdvancedDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Advanced Hover Reveal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Multi-stage reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multi-Stage Reveal</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="group relative w-full h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 transition-all duration-700 ease-out"
                  style={{
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.clipPath = "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Diagonal sweep */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Diagonal Sweep</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="group relative w-full h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 transition-all duration-500 ease-out"
                  style={{
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.clipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Curtain reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Curtain Reveal</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="group relative w-full h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500" />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 transition-all duration-600 ease-out"
                  style={{
                    clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.clipPath = "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Explosion reveal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Explosion Reveal</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="group relative w-full h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-500" />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-pink-500 transition-all duration-800 ease-out"
                  style={{
                    clipPath: "circle(0% at 50% 50%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.clipPath = "circle(150% at 50% 50%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.clipPath = "circle(0% at 50% 50%)";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`/* Advanced reveal with multiple stages */
.element {
  clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);
  transition: clip-path 0.7s ease-out;
}

.element:hover {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

