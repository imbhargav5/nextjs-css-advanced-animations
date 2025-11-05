"use client";

export function CardHoverEffectsDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Card Hover Effects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Blur on hover */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Blur on Hover</h3>
            <div className="relative bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-300 hover:backdrop-blur-xl">
              <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
              <p className="text-white/90">
                Blur increases when hovering over this card
              </p>
            </div>
          </div>

          {/* Example 2: Brightness on hover */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Brightness on Hover</h3>
            <div
              className="relative bg-white/20 p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-300"
              style={{
                backdropFilter: "blur(10px) brightness(0.9)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backdropFilter = "blur(10px) brightness(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backdropFilter = "blur(10px) brightness(0.9)";
              }}
            >
              <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
              <p className="text-white/90">
                Background brightens on hover
              </p>
            </div>
          </div>

          {/* Example 3: Saturate on hover */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Saturate on Hover</h3>
            <div
              className="relative bg-white/20 p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-300"
              style={{
                backdropFilter: "blur(10px) saturate(0.8)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backdropFilter = "blur(10px) saturate(1.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backdropFilter = "blur(10px) saturate(0.8)";
              }}
            >
              <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
              <p className="text-white/90">
                Colors become more vibrant
              </p>
            </div>
          </div>

          {/* Example 4: Complex hover */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Complex Hover Effect</h3>
            <div
              className="relative bg-white/20 p-6 rounded-xl shadow-lg border border-white/30 group transition-all duration-500"
              style={{
                backdropFilter: "blur(8px) brightness(0.95) saturate(1.0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backdropFilter = "blur(20px) brightness(1.1) saturate(1.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backdropFilter = "blur(8px) brightness(0.95) saturate(1.0)";
              }}
            >
              <h4 className="text-xl font-bold mb-2 text-gray-900">Card Title</h4>
              <p className="text-white/90">
                Multiple filters change on hover
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`.card {
  backdrop-filter: blur(10px) brightness(0.9);
  transition: backdrop-filter 0.3s;
}
.card:hover {
  backdrop-filter: blur(20px) brightness(1.2);
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

