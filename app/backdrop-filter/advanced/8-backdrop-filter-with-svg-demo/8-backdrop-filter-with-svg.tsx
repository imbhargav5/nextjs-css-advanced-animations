"use client";

export function BackdropFilterWithSVGDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Backdrop Filter with SVG</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: SVG background with blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">SVG Background</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">SVG Pattern</p>
                <p className="text-sm text-gray-600">SVG background with blur</p>
              </div>
            </div>
          </div>

          {/* Example 2: SVG mask with blur */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">SVG Mask</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(20px)",
                  maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50%25' cy='50%25' r='40%25' fill='black'/%3E%3C/svg%3E")`,
                  WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50%25' cy='50%25' r='40%25' fill='black'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">Masked Blur</p>
                <p className="text-sm text-gray-600">SVG mask with blur</p>
              </div>
            </div>
          </div>

          {/* Example 3: Complex SVG */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Complex SVG</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23ff6b6b' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
                }}
              />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-lg"
                style={{
                  backdropFilter: "blur(15px) saturate(1.5)",
                }}
              />
              <div className="relative z-10">
                <p className="text-gray-800 font-semibold">SVG Grid</p>
                <p className="text-sm text-gray-600">Grid pattern with blur</p>
              </div>
            </div>
          </div>

          {/* Example 4: SVG with filters */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">SVG with Filters</h3>
            <div className="relative p-6 rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-teal-300 rounded-lg" />
              <div
                className="absolute inset-0 bg-white/30 rounded-lg backdrop-blur-xl"
                style={{
                  backdropFilter: "blur(25px) brightness(0.9)",
                }}
              />
              <div className="relative z-10">
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div className="relative z-10">
                  <p className="text-gray-800 font-semibold">SVG Overlay</p>
                  <p className="text-sm text-gray-600">SVG elements with blur</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`background-image: url("data:image/svg+xml,...");
backdrop-filter: blur(15px);
/* Using SVG backgrounds with backdrop-filter */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

