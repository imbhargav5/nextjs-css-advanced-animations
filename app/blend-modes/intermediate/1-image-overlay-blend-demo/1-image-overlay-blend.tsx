"use client";

export function ImageOverlayBlendDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Image Overlay Blend</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Image with overlay blend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Overlay on Image</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
                  alt="Mountain landscape"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500"
                  style={{ mixBlendMode: "overlay" }}
                />
              </div>
            </div>
          </div>

          {/* Example 2: Multiply on image */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multiply on Image</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop"
                  alt="Forest path"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-orange-400"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>
          </div>

          {/* Example 3: Screen on image */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Screen on Image</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop"
                  alt="Ocean waves"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>
            </div>
          </div>

          {/* Example 4: Hard light on image */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hard Light on Image</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop"
                  alt="Desert landscape"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400 to-cyan-400"
                  style={{ mixBlendMode: "hard-light" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Code Example</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{`/* Base image layer */
<img src="image.jpg" alt="..." />

/* Overlay layer with blend mode */
<div 
  className="absolute inset-0 bg-gradient(...)"
  style={{ mixBlendMode: "overlay" }}
/>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

