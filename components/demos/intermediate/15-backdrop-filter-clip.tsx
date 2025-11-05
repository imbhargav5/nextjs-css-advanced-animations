"use client";

export function BackdropFilterClipDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Backdrop Filter with Clip-Path</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Blur backdrop */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Blur Backdrop</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
              <div
                className="absolute inset-0 backdrop-blur-md bg-white/20 transition-all duration-300"
                style={{
                  clipPath: "circle(40% at 50% 50%)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 2: Brightness backdrop */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Brightness Backdrop</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500" />
              <div
                className="absolute inset-0 backdrop-brightness-150 backdrop-contrast-125 bg-white/30 transition-all duration-300"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 3: Saturation backdrop */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Saturation Backdrop</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500" />
              <div
                className="absolute inset-0 backdrop-saturate-200 bg-white/25 transition-all duration-300"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>

          {/* Example 4: Multiple filters */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiple Filters</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500" />
              <div
                className="absolute inset-0 backdrop-blur-sm backdrop-brightness-125 backdrop-contrast-110 bg-white/20 transition-all duration-300"
                style={{
                  clipPath: "inset(10% round 20px)",
                }}
              />
              <div className="h-64" />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: circle(40% at 50% 50%);
backdrop-filter: blur(8px) brightness(1.2);
background: rgba(255, 255, 255, 0.2);
/* Clip-path works with backdrop-filter */
/* Creates frosted glass effect */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

