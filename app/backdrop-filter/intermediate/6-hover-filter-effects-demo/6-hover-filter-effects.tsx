"use client";

export function HoverFilterEffectsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Hover Filter Effects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Blur on hover */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur on Hover</h3>
            <div className="relative p-6 rounded-lg shadow-lg group transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300 group-hover:backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(5px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Hover me</p>
                <p className="text-sm text-gray-600">Blur increases on hover</p>
              </div>
            </div>
          </div>

          {/* Example 2: Brightness on hover */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Brightness on Hover</h3>
            <div className="relative p-6 rounded-lg shadow-lg group transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-green-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
                style={{
                  backdropFilter: "brightness(0.8)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backdropFilter = "brightness(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backdropFilter = "brightness(0.8)";
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Hover me</p>
                <p className="text-sm text-gray-600">Brightness increases</p>
              </div>
            </div>
          </div>

          {/* Example 3: Saturate on hover */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Saturate on Hover</h3>
            <div className="relative p-6 rounded-lg shadow-lg group transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
                style={{
                  backdropFilter: "saturate(0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backdropFilter = "saturate(2.0)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backdropFilter = "saturate(0.5)";
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Hover me</p>
                <p className="text-sm text-gray-600">Colors become vibrant</p>
              </div>
            </div>
          </div>

          {/* Example 4: Grayscale on hover */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Grayscale Toggle</h3>
            <div className="relative p-6 rounded-lg shadow-lg group transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg transition-all duration-300"
                style={{
                  backdropFilter: "grayscale(0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backdropFilter = "grayscale(1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backdropFilter = "grayscale(0)";
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Hover me</p>
                <p className="text-sm text-gray-600">Colors become grayscale</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`backdrop-filter: blur(5px);
transition: backdrop-filter 0.3s;
:hover { backdrop-filter: blur(20px); }
/* Smooth hover transitions */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

