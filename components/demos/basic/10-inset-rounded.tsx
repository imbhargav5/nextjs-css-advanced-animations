"use client";

export function InsetRoundedDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Inset with Rounded Corners</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Equal rounded corners */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Equal Rounded Corners</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-blue-400 to-cyan-500"
                style={{
                  clipPath: "inset(10% round 20px)",
                }}
              />
            </div>
          </div>

          {/* Example 2: Different corner radii */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Different Corner Radii</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-purple-400 to-pink-500"
                style={{
                  clipPath: "inset(15% round 30px 10px 40px 5px)",
                }}
              />
            </div>
          </div>

          {/* Example 3: Percentage-based rounding */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Percentage Rounding</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500"
                style={{
                  clipPath: "inset(8% round 15% 25% 15% 25%)",
                }}
              />
            </div>
          </div>

          {/* Example 4: Asymmetric inset with rounding */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Asymmetric + Rounded</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="w-full h-64 bg-gradient-to-br from-orange-400 to-red-500"
                style={{
                  clipPath: "inset(5% 20% 15% 10% round 25px 10px 35px 15px)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`clip-path: inset(10% round 20px);
/* Shorthand: all corners */
clip-path: inset(15% round 30px 10px 40px 5px);
/* Syntax: inset(top right bottom left round top-left top-right bottom-right bottom-left) */`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

